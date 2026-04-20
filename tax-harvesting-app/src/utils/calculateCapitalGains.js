export const calculateCapitalGains = (selectedIds, initial, holdings) => {
  const updated = JSON.parse(JSON.stringify(initial));

  selectedIds.forEach((id) => {
    const asset = holdings.find((h) => h.id === id);
    if (!asset) return;

    if (asset.stcg.gain > 0) {
      updated.stcg.profits += asset.stcg.gain;
    } else {
      updated.stcg.losses += Math.abs(asset.stcg.gain);
    }

    if (asset.ltcg.gain > 0) {
      updated.ltcg.profits += asset.ltcg.gain;
    } else {
      updated.ltcg.losses += Math.abs(asset.ltcg.gain);
    }
  });

  return updated;
};