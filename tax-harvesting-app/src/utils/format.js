export const formatINR = (n) => {
  const abs = Math.abs(n);

  if (abs >= 10000000) return "₹" + (n / 10000000).toFixed(2) + "Cr";
  if (abs >= 100000) return "₹" + (n / 100000).toFixed(2) + "L";

  return "₹" + Math.round(n).toLocaleString("en-IN");
};