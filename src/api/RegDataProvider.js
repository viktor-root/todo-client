import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class RegDataProvider extends BaseRestDataProvider {
  reg(login,password) {

    return axios
    .post(
      `${this.host}auth/register`,
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

// login: 'Timurmurmur',
//     password: '952169679asD',
//     nickname: 'Timurmurmur',
//     email: 'bartimurmurmur@gmail.com'
