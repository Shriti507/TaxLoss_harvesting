import { formatINR } from "../utils/format.js";
import { memo } from "react";
const colors = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  SOL: "#14F195",
  MATIC: "#8247E5",
  ADA: "#0033AD",
  DOGE: "#C2A633",
  DOT: "#E6007A",
  AVAX: "#E84142"
};

const HoldingRow = ({ asset, selected, toggle }) => {
  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggle(asset.id)}
        />
      </td>

      <td>
        <div className="asset-cell">
          <div
            className="token"
            style={{ background: colors[asset.symbol] || "#555" }}
          >
            {asset.symbol.slice(0, 2)}
          </div>
          <div>
            <div className="asset-name">{asset.coin}</div>
            <div className="muted">{asset.symbol}</div>
          </div>
        </div>
      </td>

      <td>
        <div>{asset.qty}</div>
        <div className="muted-cell">Avg {formatINR(asset.avgBuy)}</div>
      </td>

      <td>
        {formatINR(asset.currentPrice)}
      </td>

      <td>
        <div className={asset.stcg.gain > 0 ? "pos-cell" : "neg-cell"}>
          {formatINR(asset.stcg.gain)}
        </div>
        <div className="muted-cell">Bal {formatINR(asset.stcg.balance)}</div>
      </td>

      <td>
        <div className={asset.ltcg.gain > 0 ? "pos-cell" : "neg-cell"}>
          {formatINR(asset.ltcg.gain)}
        </div>
        <div className="muted-cell">Bal {formatINR(asset.ltcg.balance)}</div>
      </td>

      <td>
        {selected ? (
          <span className="sell-pill">
            {formatINR(asset.qty * asset.currentPrice)}
          </span>
        ) : (
          <span className="sell-pill empty">—</span>
        )}
      </td>
    </tr>
  );
};

export default memo(HoldingRow);