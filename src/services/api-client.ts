import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "76b5466011964a6c9fb74c573a036658",
  },
});
