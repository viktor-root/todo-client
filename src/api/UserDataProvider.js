import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class UserDataProvider extends BaseRestDataProvider {
  async loadUserData() {
    let userId = localStorage.getItem('userId');
    return await axios
    .get(`${this.host}user/${userId}`, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }
}
