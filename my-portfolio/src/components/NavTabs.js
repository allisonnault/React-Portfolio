import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='header row container-fluid align-items-center p-3'>
            <div className='col-5'>
                <h1>Allison Nault</h1>
            </div>
            <div className='col'>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a
                            href="#aboutMe"
                            onClick={() => handlePageChange('AboutMe')}
                            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavTabs;
