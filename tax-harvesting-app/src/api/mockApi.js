
export const getHoldings = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: "BTC",
          coinName: "Bitcoin",
          logo: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
          currentPrice: 5800000,
          totalHolding: 0.85,
          averageBuyPrice: 4200000,
          stcg: { balance: 950000, gain: 165000 },
          ltcg: { balance: 3980000, gain: 1195000 }
        },
        {
          coin: "ETH",
          coinName: "Ethereum",
          logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
          currentPrice: 285000,
          totalHolding: 4.5,
          averageBuyPrice: 310000,
          stcg: { balance: 410000, gain: -42500 },
          ltcg: { balance: 872500, gain: -70000 }
        },
        {
          coin: "USDT",
          coinName: "Tether",
          logo: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
          currentPrice: 83.5,
          totalHolding: 50000,
          averageBuyPrice: 82.5,
          stcg: { balance: 4175000, gain: 50000 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "SOL",
          coinName: "Solana",
          logo: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png",
          currentPrice: 12500,
          totalHolding: 65,
          averageBuyPrice: 4500,
          stcg: { balance: 325000, gain: 85000 },
          ltcg: { balance: 487500, gain: 435000 }
        },
        {
          coin: "BNB",
          coinName: "BNB",
          logo: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
          currentPrice: 45000,
          totalHolding: 12.5,
          averageBuyPrice: 48000,
          stcg: { balance: 250000, gain: -12500 },
          ltcg: { balance: 312500, gain: -25000 }
        },
        {
          coin: "XRP",
          coinName: "XRP",
          logo: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
          currentPrice: 45.5,
          totalHolding: 15000,
          averageBuyPrice: 48.5,
          stcg: { balance: 345000, gain: -15000 },
          ltcg: { balance: 337500, gain: -30000 }
        },
        {
          coin: "USDC",
          coinName: "USDC",
          logo: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png",
          currentPrice: 83.5,
          totalHolding: 25000,
          averageBuyPrice: 83.6,
          stcg: { balance: 2087500, gain: -2500 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "ADA",
          coinName: "Cardano",
          logo: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png",
          currentPrice: 55,
          totalHolding: 18000,
          averageBuyPrice: 42,
          stcg: { balance: 550000, gain: 65000 },
          ltcg: { balance: 440000, gain: 169000 }
        },
        {
          coin: "DOGE",
          coinName: "Dogecoin",
          logo: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
          currentPrice: 12.5,
          totalHolding: 45000,
          averageBuyPrice: 18.5,
          stcg: { balance: 245000, gain: -95000 },
          ltcg: { balance: 317500, gain: -175000 }
        },
        {
          coin: "MATIC",
          coinName: "Polygon",
          logo: "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png",
          currentPrice: 82,
          totalHolding: 8500,
          averageBuyPrice: 105,
          stcg: { balance: 425000, gain: -85000 },
          ltcg: { balance: 272000, gain: -110500 }
        },
        {
          coin: "TRX",
          coinName: "TRON",
          logo: "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png",
          currentPrice: 9.8,
          totalHolding: 55000,
          averageBuyPrice: 6.5,
          stcg: { balance: 245000, gain: 85000 },
          ltcg: { balance: 294000, gain: 96500 }
        },
        {
          coin: "LINK",
          coinName: "Chainlink",
          logo: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
          currentPrice: 1450,
          totalHolding: 350,
          averageBuyPrice: 1650,
          stcg: { balance: 185000, gain: -28500 },
          ltcg: { balance: 322500, gain: -41500 }
        }
      ]);
    }, 500);
  });
};


export const getCapitalGains = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        capitalGains: {
          stcg: { profits: 2125000, losses: 1450000 },
          ltcg: { profits: 3850000, losses: 2185000 }
        }
      });
    }, 500);
  });
};