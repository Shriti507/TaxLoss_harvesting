export const getHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "BTC",
          coin: "Bitcoin",
          symbol: "BTC",
          qty: 0.5,
          avgBuy: 2100000,
          currentPrice: 2450000,
          stcg: { gain: 42000, balance: 875000 },
          ltcg: { gain: 87500, balance: 1575000 }
        },
        {
          id: "ETH",
          coin: "Ethereum",
          symbol: "ETH",
          qty: 3.2,
          avgBuy: 142000,
          currentPrice: 158000,
          stcg: { gain: -19200, balance: 281600 },
          ltcg: { gain: 27840, balance: 506560 }
        },
        {
          id: "SOL",
          coin: "Solana",
          symbol: "SOL",
          qty: 45,
          avgBuy: 6500,
          currentPrice: 8200,
          stcg: { gain: 24000, balance: 184000 },
          ltcg: { gain: 15000, balance: 185000 }
        },
        {
          id: "MATIC",
          coin: "Polygon",
          symbol: "MATIC",
          qty: 5400,
          avgBuy: 85,
          currentPrice: 62,
          stcg: { gain: -35000, balance: 184600 },
          ltcg: { gain: -42000, balance: 150200 }
        },
        {
          id: "ADA",
          coin: "Cardano",
          symbol: "ADA",
          qty: 8500,
          avgBuy: 35,
          currentPrice: 42,
          stcg: { gain: 12000, balance: 165000 },
          ltcg: { gain: 28000, balance: 192000 }
        },
        {
          id: "DOGE",
          coin: "Dogecoin",
          symbol: "DOGE",
          qty: 25000,
          avgBuy: 12,
          currentPrice: 7.5,
          stcg: { gain: -45000, balance: 85000 },
          ltcg: { gain: -24000, balance: 102500 }
        },
        {
          id: "DOT",
          coin: "Polkadot",
          symbol: "DOT",
          qty: 350,
          avgBuy: 550,
          currentPrice: 680,
          stcg: { gain: 18000, balance: 145000 },
          ltcg: { gain: 12000, balance: 93000 }
        },
        {
          id: "AVAX",
          coin: "Avalanche",
          symbol: "AVAX",
          qty: 120,
          avgBuy: 2800,
          currentPrice: 2400,
          stcg: { gain: -22000, balance: 118000 },
          ltcg: { gain: -12000, balance: 170000 }
        }
      ]);
    }, 500);
  });
};

export const getCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stcg: { profits: 96000, losses: 121200 },
        ltcg: { profits: 170340, losses: 78000 }
      });
    }, 500);
  });
};