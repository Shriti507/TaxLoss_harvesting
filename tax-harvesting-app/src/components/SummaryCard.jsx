import { formatINR } from "../utils/format";

const SummaryCard = ({ title, data, isAfter }) => {
  const stcgNet = data.stcg.profits - data.stcg.losses;
  const ltcgNet = data.ltcg.profits - data.ltcg.losses;
  const total = stcgNet + ltcgNet;

  const color = (n) => (n > 0 ? "gain" : n < 0 ? "loss" : "neutral");

  return (
    <div className={`summary-card ${isAfter ? "summary-card--blue" : ""}`}>
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className={`badge ${isAfter ? "badge-after" : "badge-pre"}`}>
          {isAfter ? "SIMULATED" : "CURRENT"}
        </span>
      </div>

      <div className="section-label">SHORT-TERM CAPITAL GAINS</div>
      <div className="metric-grid">
        <div className="metric">
          <span className="metric-label">PROFITS</span>
          <span className="metric-val gain">{formatINR(data.stcg.profits)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">LOSSES</span>
          <span className="metric-val loss">{formatINR(-data.stcg.losses)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">NET</span>
          <span className={`metric-val ${color(stcgNet)}`}>{formatINR(stcgNet)}</span>
        </div>
      </div>

      <div className="section-label">LONG-TERM CAPITAL GAINS</div>
      <div className="metric-grid">
        <div className="metric">
          <span className="metric-label">PROFITS</span>
          <span className="metric-val gain">{formatINR(data.ltcg.profits)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">LOSSES</span>
          <span className="metric-val loss">{formatINR(-data.ltcg.losses)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">NET</span>
          <span className={`metric-val ${color(ltcgNet)}`}>{formatINR(ltcgNet)}</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="realised">
        <span className="realised-label">Realised Gains</span>
        <span className={`realised-val ${color(total)}`}>{formatINR(total)}</span>
      </div>
    </div>
  );
};

export default SummaryCard;
