import axios from "axios";
const BASE_URL = "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/";

export default {
  getData: () =>
    axios.get(BASE_URL + "alert/").then((response) => response.data),
  deleteNotification: (id) =>
    axios
      .delete(BASE_URL + "alert/" + id)
      .then(() => console.log("deleted " + id)),
};
