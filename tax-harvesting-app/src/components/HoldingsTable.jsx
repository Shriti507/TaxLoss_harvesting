import HoldingRow from "./HoldingRow";

const HoldingsTable = ({ holdings, selected, setSelected }) => {

  const toggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleAll = () => {
    if (selected.length === holdings.length) {
      setSelected([]);
    } else {
      setSelected(holdings.map((h) => h.id));
    }
  };

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
                key={h.id}
                asset={h}
                selected={selected.includes(h.id)}
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