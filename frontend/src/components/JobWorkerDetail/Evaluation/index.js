import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { Message } from 'semantic-ui-react';
import Avatar from '@material-ui/core/Avatar';

import './evaluation.scss';


const Evaluation = ({ jobWorkerRating }) => {
  // eslint-disable-next-line no-console
  console.log(jobWorkerRating);
  return (

    <div className="evaluation">
      <h4 className="evaluation_title">Commentaire(s)</h4>
      <div className="evaluation_note">
        {jobWorkerRating.map((jobWorker) => {
          const userAvatar = jobWorker.friendlyUser.firstname;
          console.log(jobWorker);
          return (
            <>
            <div className="ui raised card card_evaluation">
              <div className="content">
                <div className="header">{jobWorker.friendlyUser.firstname}
                  <div class="right floated author">
                      {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.friendlyUser.image} /> }
                      {!userAvatar && <Avatar alt="Remy Sharp" src=""></Avatar>}
                    </div>
                </div>
                <div className="meta">
                  <span className="category">{jobWorker.service.title}</span>
                </div>
                <div className="description">
                  <p>{jobWorker.rating.comment}</p>
                  <p></p>
                </div>
              </div>
              <div className="extra content">
                <div className="message_content_rating">
                  <Rating name="read-only" value={jobWorkerRating[0].rating.star} readOnly />
                </div>
              </div>
            </div>

            </>
          );
        })}
      </div>
      <div className="evaluation_see_more">
      </div>
    </div>
  );
};

Evaluation.propTypes = {
};


export default Evaluation;


