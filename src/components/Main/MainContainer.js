import { connect } from "react-redux";
import { loadPosts, loadPostsByTitle } from "./actions";
import { Main } from './Main';

const mapStateToProps = (state) => ({
  pageStatus: state.main.pageStatus,
  error: state.main.error,
  posts: state.main.posts
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => {
    dispatch(loadPosts());
  },
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
