import { connect } from 'react-redux';
import { canEditProfil, cancelEdit, editFieldValue, submitEdit, getJobWorkerSkill, getNewSkillValue } from 'src/action/usersActions';
import Profil from 'src/components/Profil/';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  userData: state.user.userData,
  departmentsList: state.departments.departmentsList,
  isEditable: state.user.isEditable,
  editEmail: state.user.editEmail,
  editPassword: state.user.editPassword,
  editConfirmationPassword: state.user.editConfirmationPassword,
  isEdited: state.user.isEdited,
  editAbout: state.user.editAbout,
  serviceList: state.service.serviceList,
  currentJobWorkerSkills: state.user.currentJobWorkerSkills,
  selectedSkillId: state.user.selectedSkill,
  selectedSkillPrice: state.user.selectedSkillPrice,
  selectedSkillDescription: state.user.selectedSkillDescription,

  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  editFieldValue: (value, name) => {
    dispatch(editFieldValue(value, name));
  },
  canEditProfil: () => {
    dispatch(canEditProfil());
  },
  cancelEdit: () => {
    dispatch(cancelEdit());
  },
  submitEdit: () => {
    dispatch(submitEdit());
  },
  getNewSkillValue: (skillValue, nameInput) => {
    dispatch(getNewSkillValue(skillValue, nameInput));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
