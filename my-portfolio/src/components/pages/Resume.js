import React, { useState } from 'react';
import resume from '../../images/resume.pdf'
import SinglePage from '../../components/pdf/single-page';
import AllPages from '../../components/pdf/all-pages';

export default function Resume() {
  return (
    <div className='p-3'>
      <h3>Resume</h3>
      <SinglePage pdf={resume} />
      <hr />
      {/* <h3>All Pages</h3> */}
      {/* <div className='all-page-container'>
      <AllPages pdf={resume} />
      </div><hr /> */}

    </div>
  );
}
