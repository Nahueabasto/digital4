const axios = require("axios");

const getExchangeCripto = async () => {
  try {
    const [usdtResponse, btcResponse, ethResponse] = await Promise.all([
      axios.get("https://criptoya.com/api/usdc/ars/0.5"),
      axios.get("https://criptoya.com/api/btc/usd/0.5"),
      axios.get("https://criptoya.com/api/eth/usd/0.5"),
    ]);

    // Log the entire response objects
    console.log("USDT Response:", usdtResponse.data);
    console.log("BTC Response:", btcResponse.data);
    console.log("ETH Response:", ethResponse.data);

    const exchangeCripto = {
      usdc: {
        buenbit: {
          ask: usdtResponse.data.buenbit.ask,
        },
      },
      btc: {
        decrypto: {
          ask: btcResponse.data.decrypto.ask,
        },
      },
      eth: {
        letsbit: {
          ask: ethResponse.data.letsbit.ask,
       },
      },
    };

    return exchangeCripto;
  } catch (err) {
    console.error("Error fetching exchange rates:", err);
    throw err;
  }
};

module.exports = {
  getExchangeCripto,
};
