import HoldingRow from "./HoldingRow.jsx";
import { useCallback } from "react";

const HoldingsTable = ({ holdings, selected, setSelected }) => {

const toggle = useCallback((id) => {
  setSelected((prev) => 
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
}, [setSelected]);





  const toggleAll = () => {
    if (selected.length === holdings.length) {
      setSelected([]);
    } else {
      setSelected(holdings.map((h) => h.coin));
    }
  };

  const selectedSet = new Set(selected);

  return (
    <div className="holdings-panel">
      <div className="panel-header">
        <span className="panel-title">Your Holdings</span>
        {selected.length > 0 && (
          <span className="muted">{selected.length} selected</span>
        )}
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={holdings.length > 0 && selected.length === holdings.length}
                  onChange={toggleAll}
                  aria-label="Toggle all assets"
                />
              </th>
              <th>Asset</th>
              <th>Holdings</th>
              <th>Current Price</th>
              <th>Short-Term Gain</th>
              <th>Long-Term Gain</th>
              <th>Amount to Sell</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((h) => (
              <HoldingRow
                key={h.coin}
                asset={h}
                selected={selectedSet.has(h.coin)}
                toggle={toggle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;