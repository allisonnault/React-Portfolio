import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import resume from '../../images/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />
const download = <FontAwesomeIcon icon={faFileArrowDown} />

export default function ResumePDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div className="container">
        <div className='row justify-content-between align-items-center'>
            <div className="col">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>
          <div className="col text-end">
        <button 
        className="btn icon" 
        disabled={pageNumber <= 1} 
        onClick={previousPage}>
         {leftArrow}
        </button>
        <button
        className="btn icon"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          {rightArrow}
        </button>
        <button className="btn icon">
            <a href="https://drive.google.com/file/d/18Z0O3qdkGmwHSvSydfmXfRb8sy5Cozdj/view?usp=sharing" target="_blank">{download}</a>
        </button>
        </div>
      </div>
      <div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false}/>
      </Document>
      </div>
    </div>
  );
}