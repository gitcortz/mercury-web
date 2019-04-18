import axios from "axios";
import Config from "../config";

const instance = axios.create({
  baseURL: Config.baseApiUrl,
  timeout: 30000
});

export default instance;
