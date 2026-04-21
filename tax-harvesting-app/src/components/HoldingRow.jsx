import { formatINR } from "../utils/format.js";
import { memo } from "react";

const HoldingRow = ({ asset, selected, toggle }) => {
  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggle(asset.coin)}
          aria-label={`Select ${asset.coinName} for tax harvesting`}
        />
      </td>

      <td>
        <div className="asset-cell">
          <img 
            src={asset.logo} 
            alt={asset.coin} 
            className="token" 
            style={{ objectFit: 'contain' }} 
          />
          <div>
            <div className="asset-name">{asset.coinName}</div>
            <div className="muted">{asset.coin}</div>
          </div>
        </div>
      </td>

      <td>
        <div>{asset.totalHolding}</div>
        <div className="muted-cell">Avg {formatINR(asset.averageBuyPrice)}</div>
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
            {formatINR(asset.totalHolding * asset.currentPrice)}
          </span>
        ) : (
          <span className="sell-pill empty">—</span>
        )}
      </td>
    </tr>
  );
};

export default memo(HoldingRow);