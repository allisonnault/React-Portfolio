import React, { useState } from 'react';
import resume from '../../images/resume.pdf'
import SinglePage from '../../components/pdf/single-page';


export default function Resume() {
  return (
    <div className='p-3'>
      <h3>Resume</h3>
      <SinglePage pdf={resume} />
    </div>
  );
}
