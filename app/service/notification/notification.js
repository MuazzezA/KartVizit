import axios from "axios";
const BASE_URL = "mock-api-link";

export default {
  getData: () =>
    axios.get(BASE_URL + "alert/").then((response) => response.data),
  deleteNotification: (id) =>
    axios
      .delete(BASE_URL + "alert/" + id)
      .then(() => console.log("deleted " + id)),
};
