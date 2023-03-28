import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!name) {
            setErrorMessage(
                "Please add your name"
            );
            return;
        }
        if (!message) {
            setErrorMessage(
                "Please include a message"
            );
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
        alert(`${name} ${email} ${message}`);
    }

    return (
        <div className="row justify-content-center">
            <div className='p-3 col-9 col-sm-6'>
                <h3>Contact Me:</h3>
                <div className='card p-3 shadow'>
                    <form className='form'>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name:</label>
                            <input
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                className='form-control'
                            />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                className='form-control'
                            />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message:</label>
                            <textarea
                                value={message}
                                name="message"
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <button type="button" onClick={handleFormSubmit} className="btn btn-primary">Send</button>
                    </form>
                    {errorMessage && (
                        <div className="p-3">
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
