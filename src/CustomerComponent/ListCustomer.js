import React, { Component } from 'react';
import CustomerService from '../Services/CustomerService';


class ListCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
        // this.addCustomer = this.addCustomer.bind(this);
        // this.editCustomer = this.editCustomer.bind(this);
        // this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(customerId) {
        CustomerService.deleteCustomer(customerId).then(res => {
            this.setState({ customers: this.state.customers.filter(customers => customers.customerId !== customerId) });
        });
    }

    editCustomer() {
        this.props.history.push(`/updatecustomer`);
    }

    componentDidMount() {
        CustomerService.listAllCustomers().then((res) => {
            this.setState({ customers: res.data });

        });
    }

    // addCustomer() {
    //  console.log('kavya')
    //this.props.history.push('/addcustomer');
    // }

    render() {
        return (
            <div>
                <h2 className='text-center' align='center'><b>Customer List</b></h2>

                <button type='button' onClick={() => this.props.history.push('/addcustomer')} className="btn btn-info">AddCustomer </button>
                <div className='row'>
                    <table className='table table-striped table-bordered' bgcolor='black'>
                        <thead>
                            <tr color='cyan' bgcolor='pink'>

                                <th className='text-center'>Email</th>
                                <th className='text-center'>FullName</th>
                                <th className='text-center'>Password</th>
                                <th className='text-center'>Address</th>
                                <th className='text-center'>City</th>
                                <th className='text-center'>Country</th>
                                <th className='text-center'>Pincode</th>
                                <th className='text-center'>Mobile Number</th>
                                <th className='text-center'>Registration Date</th>
                                <th className='text-center'>Actions </th>
                            </tr>
                        </thead>

                        <tbody bgcolor='grey'>
                            {
                                this.state.customers.map(
                                    customer =>
                                        <tr key={customer.customerId}>
                                            <td>{customer.email}</td>
                                            <td>{customer.fullName}</td>
                                            <td>{customer.password}</td>
                                            <td>{customer.address.address}</td>
                                            <td>{customer.address.city}</td>
                                            <td>{customer.address.country}</td>
                                            <td>{customer.address.pincode}</td>
                                            <td>{customer.mobileNumber}</td>
                                            <td>{customer.registerOn}</td>

                                            <td>
                                                <button type='button' onClick={() => this.editCustomer(customer.customerId)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: '10px' }} type='button' onClick={() => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCustomer;
