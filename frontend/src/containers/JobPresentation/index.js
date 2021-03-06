import { connect } from 'react-redux';
import JobPresentation from 'src/components/HomePage/JobPresentation';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  randomJobWorker: state.user.randomJobWorker,
  loading: state.user.loading,
  isLogged: state.user.isLogged,
  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobPresentation);
