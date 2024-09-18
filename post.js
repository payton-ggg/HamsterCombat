import axios from "axios";

const sendRequest = () => {
  const url = "https://api.hamsterkombatgame.io/clicker/tap";

  // Отримуємо поточну тимчасову мітку Unix у секундах
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const data = {
    availableTaps: 0,
    count: 11000,
    timestamp: currentTimestamp,
  };

  const config = {
    headers: {
      Authorization:
        "Bearer 1725342280116fAjQIVMwbdV2B6pzvfbBrXzsvFS6XOyRGcmfCSOQvb4asXkxrCod3bIllxIABB3S1002171663",
    },
  };

  axios
    .post(url, data, config)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const sendRequestNik = () => {
  const url = "https://api.hamsterkombatgame.io/clicker/tap";

  // Отримуємо поточну тимчасову мітку Unix у секундах
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const data = {
    availableTaps: 0,
    count: 11000,
    timestamp: currentTimestamp,
  };

  const config = {
    headers: {
      Authorization:
        "Bearer 17256053001268iRmLeOIrYTVVsgZoQ9Gi9lFAuZkZrF0byjGdUfwW08MzjFuduaAIDxokj3ivR5E619703088",
    },
  };

  axios
    .post(url, data, config)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Відправити запит через 350 секунд (350000 мілісекунд)
setInterval(sendRequest, 3900 * 1000);
setInterval(sendRequestNik, 3900 * 1000);
