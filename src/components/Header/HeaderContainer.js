import { connect } from "react-redux";
import { loadUserPosts, loadUser } from "./actions";
import { Header } from "./Header";

const mapStateToProps = (state) => ({
  pageStatus: state.header.pageStatus,
  error: state.header.error,
  user: state.header.user
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => {
    dispatch(loadUser())
  }
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
