import axios from "axios";

const sendRequest = () => {
  const url = "https://api.hamsterkombatgame.io/clicker/tap";

  // Отримуємо поточну тимчасову мітку Unix у секундах
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const data = {
    availableTaps: 0,
    count: 4000,
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

// Відправити запит через 350 секунд (350000 мілісекунд)

setInterval(sendRequest, 1405 * 1000);
