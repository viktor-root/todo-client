import { connect } from "react-redux";
import { addPost } from "./actions";
import { TaskInput } from "./TaskInput";

const mapStateToProps = (state) => ({
  pageStatus: state.newPost.pageStatus,
  error: state.newPost.error,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => {
    dispatch(addPost(post));
  }
});

export const TaskInputContainer = connect(mapStateToProps, mapDispatchToProps)(TaskInput);
