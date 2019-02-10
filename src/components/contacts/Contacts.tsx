import React from 'react';

import Segment from 'components/segment/Segment';

import s from './Contacts.module.scss';

class Contacts extends React.Component {
  render () {
    return (
      <Segment title="Let’s make your progress together">
        <div className={s.contacts}>
          <h2>Submit</h2>
        </div>
      </Segment>
    );
  }
}

export default Contacts;
