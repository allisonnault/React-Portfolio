import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

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
    <div>
        <div className='row'>
            <div className="col">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>
          <div className="col">
        <button className="btn" disabled={pageNumber <= 1} onClick={previousPage}>
         {leftArrow}
        </button>
        <button
        className="btn"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          {rightArrow}
        </button>
        </div>
      </div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false}/>
      </Document>
    </div>
  );
}