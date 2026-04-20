import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import HoldingsTable from "../components/HoldingsTable.jsx";
import { getHoldings, getCapitalGains } from "../api/mockApi.js";
import { calculateCapitalGains } from "../utils/calculateCapitalGains.js";
import { formatINR } from "../utils/format.js";

const Home = () => {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getHoldings(), getCapitalGains()]).then(([hData, cgData]) => {
      setHoldings(hData);
      setCapitalGains(cgData);
      setLoading(false);
    });
  }, []);

  const updated = useMemo(() => {
    if (!capitalGains || holdings.length === 0) return null;
    return calculateCapitalGains(selected, capitalGains, holdings);
  }, [selected, capitalGains, holdings]);

  if (loading || !capitalGains || holdings.length === 0 || !updated) {
    return <div className="shell">Loading...</div>;
  }

  const pre =
    capitalGains.stcg.profits -
    capitalGains.stcg.losses +
    capitalGains.ltcg.profits -
    capitalGains.ltcg.losses;

  const post =
    updated.stcg.profits -
    updated.stcg.losses +
    updated.ltcg.profits -
    updated.ltcg.losses;

  const savings = pre - post;

  return (
    <>
      <Navbar />

      <div className="shell">
        <div className="header-section">
          <h1 className="page-title">Tax Loss Harvesting</h1>
          <p className="page-subtitle">
            Select holdings to simulate tax-optimised rebalancing
          </p>
        </div>

        {savings > 0 && (
          <div className="savings-banner">
            <span className="savings-label">You're going to save</span>
            <span className="savings-val">{formatINR(savings)}</span>
          </div>
        )}

        <div className="cards-row">
          <SummaryCard title="Pre-Harvesting" data={capitalGains} />
          <SummaryCard title="After-Harvesting" data={updated} isAfter />
        </div>

        <HoldingsTable
          holdings={holdings}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

export default Home;