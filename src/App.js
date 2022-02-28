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
		}, 3000);

	}, []);

	function buySelect(event) {
		let company = event.target.id;
		company = company.substr(5);
		setBuySellCompany(company);
		setBuyTab(true);

		const index = mapCompany[company];
		const marketPrice = data[index].ltp;
		setMarketPriceValue(marketPrice);
	}

	function sellSelect(event) {
		let company = event.target.id;
		company = company.substr(6);
		setBuySellCompany(company);
		setBuyTab(false);

		const index = mapCompany[company];
		const marketPrice = data[index].ltp;
		setMarketPriceValue(marketPrice);
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

	function pendingTransactionSuccessful(index) {
		// Add to complete transaction

		// Add to assests

		// remove from pending transaction 
		setPendingTransaction(prev => {
			return prev.filter((_, i) =>  index !== i)
		})
	}

	function checkPendingTransaction() {
		// check if successful
		for(let i=pendingTransaction.length-1; i>=0; i--) {
			const company = pendingTransaction[i].company;
			const index = mapCompany[company];
			const currentPrice = parseFloat(data[index].ltp);
			const targetPrice = parseFloat(pendingTransaction[i].price);

			if(targetPrice >= currentPrice) {
				pendingTransactionSuccessful(i);
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
					/>
					<Assets />
				</div>
			</div>
		</div>
	);
}

export default App;
