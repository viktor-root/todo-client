import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class PostDataProvider extends BaseRestDataProvider {
  async addPost(post) {
    
    return await axios
    .post(`${this.host}post`,{ title: post }, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }

  async changePost(post, id) {
    return await axios
    .put(`${this.host}post/${id}`, post, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }

  async deletePost(id){
    return await axios
    .delete(`${this.host}post/${id}`,{ headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }
}
