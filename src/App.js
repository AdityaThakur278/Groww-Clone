import React, { useEffect, useState } from "react";
import CompanyData from "./components/CompanyData/CompanyData";
import Transaction from "./components/Transaction/Transaction";
import BuySellForm from "./components/BuySellForm/BuySellForm";
import "./App.css"
import Assets from "./components/Assets/Assets";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pendingTransaction, setPendingTransaction] = useState([]);
	const [completeTransaction, setCompleteTransaction] = useState([]);
	const [buySellCompany, setBuySellCompany] = useState("Loading...")
	const [buyTab, setBuyTab] = useState(true);
	const [marketPriceValue, setMarketPriceValue] = useState(null);
	const [mapCompany, setMapCompany] = useState({});
	const [shareQuantityValue, setShareQuantityValue] = useState(0);
	const [targetPrice, setTargetPrice] = useState("0.0");
	const [assetsList, setAssetsList] = useState([]);
	const [sharesOwned, setSharesOwned] = useState(0);

	function mapCompanyToIndex(data) {
		const mapObj = {};
		data.forEach(function (obj, index) {
			mapObj[obj.company] = index;
		});
		setMapCompany(mapObj);
	}

	useEffect(() => {
		setLoading(true);

		const mockAPI = async () => {
			const response = await fetch("mock/indiaStock.json");
			const res = await response.json();

			setLoading(false);
			setData(res.data);
			mapCompanyToIndex(res.data);

			// Load 1st company in BuySellForm at first render
			setBuySellCompany(prev => prev==="Loading..." ? res.data[0].company : prev);
			setMarketPriceValue(prev => prev===null ? res.data[0].ltp : prev);
		};

		setInterval(() => {
			mockAPI();
		}, 5000);

	}, []);

	function buySelect(event) {
		let company = event.target.id;
		company = company.substr(5);
		setBuySellCompany(company);
		setBuyTab(true);

		const index = mapCompany[company];
		const marketPrice = data[index].ltp;
		setMarketPriceValue(marketPrice);
		handleSharesOwned(company);
	}

	function sellSelect(event) {
		let company = event.target.id;
		company = company.substr(6);
		setBuySellCompany(company);
		setBuyTab(false);

		const index = mapCompany[company];
		const marketPrice = data[index].ltp;
		setMarketPriceValue(marketPrice);
		handleSharesOwned(company);
	}

	function handleSharesOwned(company) {
		let quantity = 0;
		assetsList.forEach(function(asset) {
			if(asset.company === company) {
				quantity = asset.quantity;
			}
		});
		setSharesOwned(quantity);
	}

	// Add to pending list
	function buySellTransaction(type) {
		if(buySellCompany === "Loading...") return;

		const transactionDetail = {
			type,
			company: buySellCompany,
			price: targetPrice,
			quantity: shareQuantityValue,
			total: (parseFloat(targetPrice) * parseFloat(shareQuantityValue)).toFixed(2),
		};

		setPendingTransaction(prev => [transactionDetail , ...prev])
	}

	function addToAssets(company, targetPrice, quantity, total) {
		const shallowCopyAssetList = [...assetsList];
		let searchIndex = undefined;

		shallowCopyAssetList.forEach(function(obj, i) {
			if(obj.company === company) {
				searchIndex = i;
			}
		});

		let totalShares;
		if(searchIndex === undefined) {
			const assetDetail = {
				company,
				price : targetPrice,
				quantity,
				total
			}
			setAssetsList(prev => [assetDetail, ...prev]);
			totalShares = quantity;
		}
		else {
			const assetRow = {...shallowCopyAssetList[searchIndex]};
			assetRow.quantity = (parseFloat(assetRow.quantity) + parseFloat(quantity));
			assetRow.total = (parseFloat(assetRow.total) + parseFloat(total)).toFixed(2);
			assetRow.price = (parseFloat(assetRow.total) / parseFloat(assetRow.quantity)).toFixed(2);
			shallowCopyAssetList[searchIndex] = assetRow;
			setAssetsList(shallowCopyAssetList);
			totalShares = assetRow.quantity;
		}

		// To change Shares Owned Value transaction is successful
		if(buySellCompany === company) {
			setSharesOwned(totalShares);
		}
	}

	function buyTransactionSuccessful(index, company, targetPrice, quantity, total) {
		// Add to complete transaction
		const transactionDetail = {
			type: "B",
			company,
			price: targetPrice,
			quantity,
			total,
		};
		setCompleteTransaction(prev => [transactionDetail , ...prev]);
	
		// Add to assests
		addToAssets(company, targetPrice, quantity, total);

		// remove from pending transaction 
		setPendingTransaction(prev => {
			return prev.filter((_, i) =>  index !== i)
		})
	}

	function checkPendingTransaction() {
		// check if successful
		for(let i=pendingTransaction.length-1; i>=0; i--) {
			const type = pendingTransaction[i].type;
			const company = pendingTransaction[i].company;
			const targetPrice = parseFloat(pendingTransaction[i].price);
			const quantity = pendingTransaction[i].quantity;
			const total = pendingTransaction[i].total;

			const index = mapCompany[company];
			const currentPrice = parseFloat(data[index].ltp);

			if(targetPrice >= currentPrice && type === "B") {
				buyTransactionSuccessful(i, company, targetPrice, quantity, total);
			}
		}
	}

	useEffect(() => {
		checkPendingTransaction();
	}, [data]);

	return (
		<div className="main-constainer">
			<div className="sub-container">
				<CompanyData
					loading={loading}
					data={data}
					buySelect={buySelect}
					sellSelect={sellSelect}
				/>
				<Transaction 
					pendingTransaction={pendingTransaction}
					completeTransaction={completeTransaction}
				/>
				<div className="third-column">
					<BuySellForm
						company={buySellCompany}
						buyTab={buyTab}
						setBuyTab={setBuyTab}
						marketPriceValue={marketPriceValue}
						shareQuantityValue={shareQuantityValue}
						setShareQuantityValue={setShareQuantityValue}
						targetPrice={targetPrice}
						setTargetPrice={setTargetPrice}
						buySellTransaction={buySellTransaction}
						sharesOwned={sharesOwned}
					/>
					<Assets 
						assetsList={assetsList}
						setBuySellCompany={setBuySellCompany}
						setBuyTab={setBuyTab}
						handleSharesOwned={handleSharesOwned}
						data={data}
						mapCompany={mapCompany}
						setMarketPriceValue={setMarketPriceValue}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
