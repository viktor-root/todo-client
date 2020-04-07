import { connect } from "react-redux";
import { changePost, deletePost } from "./actions";
import { Task } from "./Task";

const mapStateToProps = (state) => ({
  pageStatus: state.post.pageStatus,
  error: state.post.error,
  post: state.post.post,
});

const mapDispatchToProps = (dispatch) => ({
  changePost: (post, id) => {
    dispatch(changePost(post,id));
  },
  deletePost: (id) => {
    dispatch(deletePost(id));
  }
});

export const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);
