// == Import Library
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating, Button, Image, CardContent } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

// == Import style
import './joberService.scss';

// == Import Utils
import { whitoutAvatar } from 'src/utils';


const JoberService = ({ jobWorker, getServiceName, jobWorkerStar }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  const userAvatar = jobWorker.user.image;
  const id = jobWorker.user.id;
  console.log(jobWorker);
 let userRating = jobWorker.user.jobWorkerDemands[0];
  const screenWidth = window.screen.width;
  //console.log(screenWidth);
  console.log(jobWorkerStar);

  console.log(`je suis jobworkerdemand ${jobWorker.user.jobWorkerDemands}`);


  if (userRating === undefined) {
    userRating = {
      rating: null,
    };
    console.log(userRating);
  }
  
      if (userRating.rating !== null) {

        return (
          <>
          <Link>
        <div className="jobWorker_box">
          <div className="jober">
            <div className="Jober_avatar">
              {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.user.image} /> }
              {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.user.firstname)}</Avatar>}
            </div>
            <div className="Jober_card">
              <Card>
                <Card.Content header={jobWorker.user.firstname} />
                <Card.Content description={jobWorker.description} />
                <Card.Content extra>
                  <Rating defaultRating={userRating.rating.star} maxRating={5} disabled />
                  <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
                    <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Contact</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </Link>
      </>
        );
      } else {
        return (
          <>
          <Link>
        <div className="jobWorker_box">
          <div className="jober">
            <div className="Jober_avatar">
              {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.user.image} /> }
              {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.user.firstname)}</Avatar>}
            </div>
            <div className="Jober_card">
              <Card>
                <Card.Content header={jobWorker.user.firstname} />
                <Card.Content description={jobWorker.description} />
                <Card.Content extra>
                  <Rating defaultRating={0} maxRating={5} disabled />
                  <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
                    <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Contact</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </Link>
      </>
        );
      }
    
    }

export default JoberService;
