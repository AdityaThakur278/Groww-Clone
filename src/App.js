import React, { useEffect, useState } from "react";
import CompanyData from "./components/CompanyData/CompanyData";
import Transaction from "./components/Transaction/Transaction";
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingTransaction, setPendingTransaction] = useState([]);
  const [completeTransaction, setCompleteTransaction] = useState([]);

  useEffect(() => {
    setLoading(true);

    const mockAPI = async () => {
      const response = await fetch("mock/indiaStock.json");
      const res = await response.json();

      setLoading(false);
      setData(res.data);
    };

    setInterval(() => {
      mockAPI();
    }, 3000);
  }, []);

  function buySelect(event) {
    console.log(event.target.id);
  }

  function sellSelect(event) {
    console.log(event.target.id);
  }

  return (
    <div className="main-constainer">
      <div className="sub-container">
        <CompanyData
          loading={loading}
          data={data}
          buySelect={buySelect}
          sellSelect={sellSelect}
        />
        <Transaction/>
      </div>
    </div>
  );
}

export default App;
