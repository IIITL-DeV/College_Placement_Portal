import React from 'react';
import moment from 'moment';
import SvgIcon from '../../components/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import '../../css/styles.css';

const JobCard = (props) => {
  console.log(props.details);
  return (
    <div className="job__card">
      <div className="job__card__section-1">
        <div className="company-logo-container">
          <SvgIcon src="logo.png" classname="company-logo" />
        </div>

        <div className="company-name-container">
          <h3>{props.details.companyName}</h3>
        </div>
      </div>

      <div className="job__card__section-2">
        <div className="company-details-container">
          <div className="company-details">
            <FontAwesomeIcon icon={faUserTie} className="fa-icon" />
            <div className="company-details-value">
              <p>Jobs Posted</p>
              <h3>{props.details.jobOpenings.length}</h3>
            </div>
          </div>
          {/* <div className="company-details">
            <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />
            <div className="company-details-value">
              <p>Job Type</p>
              <h3>{props.details.recruitmentType}</h3>
            </div>
          </div>
          <div className="company-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
            <div className="company-details-value">
              <p>Location</p>
              <h3>{props.details.postingLocation}</h3>
            </div>
          </div>
          <div className="company-details">
            <FontAwesomeIcon icon={faRupeeSign} className="fa-icon" />
            <div className="company-details-value">
              <p>Package</p>
              <h3>{props.details.package}</h3>
            </div>
          </div> */}
        </div>

        <hr style={{ border: '1px solid darkgray' }} />

        <div className="apply-before-container">
          Visiting On:{' '}
          <span>
            {new Date(props.details.jobOpenings[0].deadlineDate) < Date.now()
              ? 'Visited'
              : moment(props.details.jobOpenings[0].deadlineDate).format(
                  'DD-MM-YYYY'
                )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
