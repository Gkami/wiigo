import Footer from './footer';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';

const mapStateToProps = ({user}) => ({
  user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
