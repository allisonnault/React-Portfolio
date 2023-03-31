import React, { useState } from 'react';
import resume from '../../images/resume.pdf'
import ResumePDF from '../pdf/resumePDF';


export default function Resume() {
  return (
    <div className='row justify-content-center'>
    <div className='p-3 col-6'>
      <h3>Resume</h3>
      <ResumePDF pdf={resume} />
    </div>
    </div>
  );
}
