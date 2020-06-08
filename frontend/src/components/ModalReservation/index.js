import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextArea, Button } from 'semantic-ui-react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from 'date-fns/locale/fr';


// == Import style
import './modalReservation.scss';


// == Composant
const ModalReservation = ({ changeFieldRequest, submitRequest, currentJobWorkerDetail, changeFieldHourRequest, changeFieldDateRequest, requestDate, requestHour }) => {
  const { skills } = currentJobWorkerDetail;
  // console.log(skills);
  const selectedDate = Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleChange = (evt) => {
    console.log(`coucou j'envoi ${evt.target.value} + ${evt.target.name}`);
    changeFieldRequest(evt.target.value, evt.target.name);
  };
  console.log(currentJobWorkerDetail);
  const handleSubmit = (evt) => {
    console.log('coucou je suis le submit de la request');
    evt.preventDefault();
    submitRequest();
  };
  const handleDate = (date) => {
    // Methode to listen the change on the calendar et send the result in the reducer
    let month = (date.getMonth() + 1);
    month = month.toString();
    month = ('0' + (month)).slice(-2);
    // console.log(month);
    // console.log(date.getFullYear());
    const years = date.getFullYear().toString();
    const days = date.getDate().toString();
    const newDate = `${years}-${month}-${days}`;
    // console.log(newDate);
    changeFieldDateRequest(newDate);
  };
  const handleHour = (date) => {
    // console.log(date);
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const newHour = `${hour}h${minutes}`;
    // console.log(newHour);
    changeFieldHourRequest(newHour);
  };
  return (
    <div className="ModalReservation">
      <a href="#reservation"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Reservation</Button></a>
      <div id="reservation" className="reservation">
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Reservation</p>
          </div>
          <div className="modal_content">
            <div className="modal_select">
              <select name="currentSkill" onChange={handleChange} id="">
                <option value="select">Choisissez la compétence désirée</option>
                {skills.map((skill) => (
                  <option value={skill.service.id}>{skill.service.title}</option>
                ))}
              </select>
            </div>
            <div className="modal_text">
              <Form className="modalTextArea">
                <TextArea onChange={handleChange} name="requestBody" className="modalTextArea_content" placeholder="Décrivez précisément ce dont vous avez besoin..." />
              </Form>
            </div>
            <div className="modal_calendar" />
            <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Choisissez une date"
                  format="MM/dd/yyyy"
                  type="datetime-fr"
                  name="requestDate"
                  value={selectedDate}
                  onChange={handleDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  DateTimeFormat={Intl.DateTimeFormat}
                  locale="fr"
                />
                <KeyboardTimePicker
                  locale={frLocale}
                  ampm={false}
                  margin="normal"
                  id="time-picker"
                  name="requestHour"
                  label="Choisissez une heure"
                  value={selectedDate}
                  onChange={handleHour}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="div_submit">
              <a href="#"><button className="cancel_btn" type="submit">Annuler</button></a>
              <button className="submit_btn" type="submit">Reserver</button>
            </form>
            <a href="#" className="close_btn">close</a>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalReservation.propTypes = {
  /** func with param {newValue} {inputName} */
  changeFieldRequest: PropTypes.func.isRequired,
  /** func with param {newHour} */
  changeFieldHourRequest: PropTypes.func.isRequired,
  /** func with param {newDate} */
  changeFieldDateRequest: PropTypes.func.isRequired,
  /** func with no params */
  submitRequest: PropTypes.func.isRequired,
  currentJobWorkerDetail: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
};

// == Export
export default ModalReservation;
