import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService';
import './updateCustomer.css'
class UpdateCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            fullName: '',
            password: '',
            address: {
                address: '',
                city: '',
                country: '',
                pincode: ''
            },
            mobileNumber: '',
            registerOn: '',

        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changeFullName = this.changeFullName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changePincode = this.changePincode.bind(this);
        this.changeMobileNumber = this.changeMobileNumber.bind(this);
        this.changeRegistrationDate = this.changeRegistrationDate.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.listAllCustomers().then((res) => {
            this.setState({
                email: this.email,
                fullName: this.fullName,
                password: this.password,
                address: this.address,
                city: this.city,
                country: this.country,
                pincode: this.pincode,
                mobileNumber: this.mobileNumber,
                registerOn: this.registerOn


            });
        });
    }

    updateCustomer = (event) => {
        event.preventDefault();
        let address = { address: this.state.address, city: this.state.city, country: this.state.country, pincode: this.state.pincode }
        let customer = {
            email: this.state.email, fullName: this.state.fullName, password: this.state.password, address, mobileNumber: this.state.mobileNumber, registerOn: this.state.registerOn,
        };
        console.log('customer=>' + JSON.stringify(customer));
        CustomerService.updateCustomer(customer).then(res => {
            if (res.status === 200)
                alert('customer updated successfully')
            else
                Promise.reject()
        }).catch(err => alert('Error'))

    }


    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changeFullName = (event) => {
        this.setState({ fullName: event.target.value });
    }



    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    changeAddress = (event) => {
        this.setState({ address: event.target.value });
    }


    changeCity = (event) => {
        this.setState({ city: event.target.value });
    }
    changeCountry = (event) => {
        this.setState({ country: event.target.value });
    }
    changePincode = (event) => {
        this.setState({ pincode: event.target.value });
    }
    changeMobileNumber = (event) => {
        this.setState({ mobileNumber: event.target.value });
    }
    changeRegistrationDate = (event) => {
        this.setState({ registerOn: event.target.value });
    }

    // changeAddressId= (event) => {
    // this.setState({ addressId: event.target.value });
    // this. setState( {address:{...this.state.address, addressId:event.target.value}});
    // }




    cancel() {
        this.props.history.push('/listallcustomer')
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='ard col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'><b>UPDATE CUSTOMER</b></h3>
                            <div className='card-body'>
                                <form name='updateustomer' className='update-customer' actions="">

                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <input type='text' placeholder='Email' name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmail}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Full Name:</label>
                                        <input type='text' placeholder='Full Name' name='fullName' className='form-control'
                                            value={this.state.fullName} onChange={this.changeFullName}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <input type='text' placeholder='Password' name='password' className='form-control'
                                            value={this.state.password} onChange={this.changePassword}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Address:</label>
                                        <input type='text' placeholder='Address' className='form-control'
                                            value={this.state.address} onChange={this.changeAddress}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>City:</label>
                                        <input type='text' placeholder='City' className='form-control'
                                            value={this.state.city} onChange={this.changeCity}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Country:</label>
                                        <input type='text' placeholder='Country' className='form-control'
                                            value={this.state.country} onChange={this.changeCountry}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Pincode:</label>
                                        <input type='number' placeholder='Pincode' className='form-control'
                                            value={this.state.pincode} onChange={this.changePincode}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Mobile Number:</label>
                                        <input type='text' placeholder='Mobile Number' name='mobileNumber' className='form-control'
                                            value={this.state.mobileNumber} onChange={this.changeMobileNumber}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>RegistrationDate:</label>
                                        <input type='date' name='registerOn' className='form-control'
                                            value={this.state.registerOn} onChange={this.changeRegistrationDate}></input>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateCustomer}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCustomer