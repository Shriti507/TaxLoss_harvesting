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
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [hData, cgData] = await Promise.all([getHoldings(), getCapitalGains()]);
        setHoldings(hData);
        setCapitalGains(cgData.capitalGains);
      } catch (err) {
        console.error("Dashboard Sync Failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const updated = useMemo(() => {
    if (!capitalGains) return null;
    return calculateCapitalGains(selected, capitalGains, holdings);
  }, [selected, capitalGains, holdings]);

  if (loading) {
    return <div className="shell">Loading Dashboard...</div>;
  }

  if (error || !capitalGains || !updated) {
    return (
      <div className="shell" style={{ color: "var(--red)" }}>
        Error loading harvesting data. Please try again.
      </div>
    );
  }

  const calculateNetTotal = (data) =>
    (data.stcg.profits - data.stcg.losses) + (data.ltcg.profits - data.ltcg.losses);

  const pre = calculateNetTotal(capitalGains);
  const post = calculateNetTotal(updated);

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