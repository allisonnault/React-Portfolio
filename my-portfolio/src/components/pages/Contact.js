import React from 'react';

export default function Contact() {
    return (
        <div className='p-3'>
            <h3>Contact Me:</h3>
            <div className='card p-3 shadow'>
            <form className='form'>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="contactName"/> 
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="contactEmail"/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" id="contactMessage"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
}
