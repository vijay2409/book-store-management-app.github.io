import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='ard col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'><b>Contact Us</b></h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input type='text' placeholder='Name' name='name' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>EmailId:</label>
                                    <input type='email' placeholder='Email' name='email' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>Phone:</label>
                                    <input type='number' placeholder='Phone' name='phone' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>Subject:</label>
                                    <input type='text' placeholder='Subject' name='subject' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>Description:</label>
                                    <input type='text' placeholder='Description' name='description' className='form-control'></input>
                                </div>
                                <button className="btn btn-danger" style={{ marginTop: "10px" }} onClick={()=>alert('We will contact you soon')}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs