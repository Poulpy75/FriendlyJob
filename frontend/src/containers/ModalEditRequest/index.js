import { connect } from 'react-redux';
import { openSuccesMessage, closeSuccesMessage } from 'src/action/usersActions';
import {
  changeFieldRequest,
  changeFieldHourRequest,
  changeFieldDateRequest,
  submitSetRequest,
  getRequestId,
  getRequestDate,
  getRequestHour,
} from '../../action/requestAction';
import ModalEditRequest from '../../components/ModalEditRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  requestId: state.request.requestId,
  RequestBody: state.request.RequestBody,
  requestDate: state.request.requestDate,
  requestHour: state.request.requestHour,
  editedDate: state.request.editedDate,
  editedHour: state.request.editedHour,
  isOpen: state.user.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequestId: (requestId) => {
    dispatch(getRequestId(requestId));
  },

  getRequestDate: (reservationDate) => {
    dispatch(getRequestDate(reservationDate));
  },
  getRequestHour: (reservationHour) => {
    dispatch(getRequestHour(reservationHour));
  },
  changeFieldRequest: (newValue, inputName) => {
    dispatch(changeFieldRequest(newValue, inputName));
  },
  submitSetRequest: () => {
    dispatch(submitSetRequest());
  },

  changeFieldHourRequest: (newHour) => {
    dispatch(changeFieldHourRequest(newHour));
  },
  changeFieldDateRequest: (newDate) => {
    dispatch(changeFieldDateRequest(newDate));
  },
  openSuccessMessage: () => {
    dispatch(openSuccesMessage());
  },
  closeSuccessMessage: () => {
    dispatch(closeSuccesMessage());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalEditRequest);
