import React, { Component } from 'react'
import OrderService from '../Services/OrderService';


class AddOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderDetailsId: '',
            book: {
                bookId: '',
            },
            bookOrder: {
                orderId: '',
            },
            quantity: '',
            subtotal: ''

        }
        this.changeOrderDetailsId = this.changeOrderDetailsId.bind(this);
        this.changeBookId = this.changeBookId.bind(this);
        this.changeOrderId = this.changeOrderId.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeSubtotal = this.changeSubtotal.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }
    saveOrder = (event) => {
        event.preventDefault();
        let book = { bookId: this.state.bookId }
        let bookOrder = { orderId: this.state.orderId }
        let order = {
            orderDetailsId: this.state.orderDetailsId, book, bookOrder, quantity: this.state.quantity,
            subtotal: this.state.subtotal
        };
        console.log('order=>' + JSON.stringify(order));
        //console.log('order=>'+JSON.stringify(this.state.order));
        OrderService.addOrder(order).then(res => {
            if (res.status === 200)
                alert('Order successfully added')
            else
                Promise.reject()
        }).catch(err => alert('Error'))

    }

    changeOrderDetailsId = (event) => {
        this.setState({ orderDetailsId: event.target.value });
    }
    changeBookId = (event) => {
        this.setState({ bookId: event.target.value });
    }
    changeOrderId = (event) => {
        this.setState({ orderId: event.target.value });
    }
    changeQuantity = (event) => {
        this.setState({ quantity: event.target.value });
    }
    changeSubtotal = (event) => {
        this.setState({ subtotal: event.target.value });
    }
    cancel() {
        this.props.history.push('/viewOrderDetails')
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='ard col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'><b>Add Order</b></h3>
                            <div className='card-body'>
                                <form className='add-customer'>
                                    <div className='form-group'>
                                        <label>OrderDetailsId:</label>
                                        <input type='number' placeholder='number' name='number' className='form-control'
                                            value={this.state.orderDetailsId} onChange={this.changeOrderDetailsId}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>BookId:</label>
                                        <input type='number' placeholder='number' name='Book' className='form-control'
                                            value={this.state.bookId} onChange={this.changeBookId}></input>
                                    </div>

                                    <div className='form-group'>
                                        <label>BookOrderId:</label>
                                        <input type='number' placeholder='bookOrder' name='bookOrder' className='form-control'
                                            value={this.state.orderId} onChange={this.changeOrderId}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Quantity:</label>
                                        <input type='number' placeholder='quantity' name='quantity' className='form-control'
                                            value={this.state.quantity} onChange={this.changeQuantity}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Subtotal:</label>
                                        <input type='number' placeholder='subtotal' name='vsubtotal' className='form-control'
                                            value={this.state.subtotal} onChange={this.changeSubtotal}></input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveOrder}>Save</button>
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

export default AddOrder