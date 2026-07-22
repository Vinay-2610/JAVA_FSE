import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohortCode, cohortName, startedOn, currentStatus, coach, trainer }) {
  const headingColor = currentStatus === 'Ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>{cohortCode}</h3>
      <dl>
        <dt>Cohort Name</dt>
        <dd>{cohortName}</dd>
        <dt>Started On</dt>
        <dd>{startedOn}</dd>
        <dt>Current Status</dt>
        <dd>{currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{coach}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
