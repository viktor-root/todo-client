import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class AuthDataProvider extends BaseRestDataProvider {
  login(login, password) {
    return axios
    .post(
      `${this.host}auth/login`,
      { login, password },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Origin: "*"
        }
      }
    )
    .then(res =>
      {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        return res
      }
    )
  }
}
