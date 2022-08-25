import React, { Component } from 'react'
import OrderService from '../Services/OrderService';

class UpdateOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderDetailsId: this.props.match.params.orderDetailsId,
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
        this.updateOrder = this.updateOrder.bind(this);
    }
    
    updateOrder = (event) => {
        event.preventDefault();
        let book = { bookId: this.state.bookId }
        let bookOrder = { orderId: this.state.orderId }
        let order = {
            orderDetailsId: this.state.orderDetailsId, book, bookOrder, quantity: this.state.quantity,
            subtotal: this.state.subtotal
        };
        // console.log('book=>' + JSON.stringify(book));
        // console.log('bookOrder=>' + JSON.stringify(bookOrder));
        console.log('order=>' + JSON.stringify(order));
        OrderService.updateOrder(order).then(res => {
            if (res.status === 200)
                alert('Order successfully Updated')
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
                            <h3 className='text-center'><b>UpdateOrder</b></h3>
                            <div className='card-body'>
                                <form>
                                    <table align='center' color='pink' bgcolor='cyan'>
                                        <div className='form-group'>
                                            <td width='100'>   <label>orderDetailsId:</label></td>
                                            <td>   <input type='number' placeholder='number' name='number' className='form-control'
                                                value={this.state.orderDetailsId} onChange={this.changeOrderDetailsId}></input>
                                            </td>    </div>
                                        <div className='form-group'>
                                            <td width='100'><label>BookID:</label></td>
                                            <td>    <input type='number' placeholder='number' name='BookId' className='form-control'
                                                value={this.state.bookId} onChange={this.changeBookId}></input>
                                            </td>    </div>
                                        <div className='form-group'>
                                            <td width='100'>  <label>OrderId:</label></td>
                                            <td>   <input type='number' placeholder='number' name='OrderId' className='form-control'
                                                value={this.state.orderId} onChange={this.changeOrderId}></input>
                                            </td>    </div>
                                        <div className='form-group'>
                                            <td width='100'>    <label>quantity:</label></td>
                                            <td>    <input type='number' placeholder='quantity' name='quantity' className='form-control'
                                                value={this.state.quantity} onChange={this.changeQuantity}></input>
                                            </td>    </div>
                                        <div className='form-group'>
                                            <td width='100'>    <label>subtotal:</label></td>
                                            <td>   <input type='number' placeholder='subtotal' name='subtotal' className='form-control'
                                                value={this.state.subtotal} onChange={this.changeSubtotal}></input>
                                            </td>   </div>

                                        <button onClick={this.updateOrder}>Update</button>
                                        <button onClick={this.cancel.bind(this)}>Cancel</button>
                                       
                                    </table>    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateOrder