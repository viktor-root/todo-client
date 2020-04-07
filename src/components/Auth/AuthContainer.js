import { connect } from "react-redux";
import { Auth } from "./Auth";
import { login } from "./actions";

const mapStateToProps = (state) => ({
  pageStatus: state.auth.pageStatus,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => {
    dispatch(login(email, password));
  }
});

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
