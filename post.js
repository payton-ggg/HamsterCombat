import axios from "axios";

const sendRequest = () => {
  const url = "https://api.hamsterkombatgame.io/clicker/tap";

  const currentTimestamp = Math.floor(Date.now() / 1000);

  const data = {
    availableTaps: 0,
    count: 11000,
    timestamp: currentTimestamp,
  };

  const config = {
    headers: {
      Authorization:
        "Bearer ",
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

setInterval(sendRequest, 3900 * 1000);
