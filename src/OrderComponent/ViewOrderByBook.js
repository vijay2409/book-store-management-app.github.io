import React, { Component } from 'react'
import OrderService from '../Services/OrderService';

export class ViewOrderByBook extends Component {
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
        this.viewOrderByBook = this.viewOrderByBook.bind(this);
    }
    componentDidMount() {
        OrderService.viewOrderByBook(this.state.bookId).then((res => {
            let book = res.data;
            let bookOrder=res.data;
            this.setState({
                orderDetailsId: this.orderDetailsId,
                book: book.bookId,
                bookOrder: bookOrder.orderId,
                orderId: this.orderId,
                quantity: this.quantity,
                subtotal: this.subtotal
            });
        }));
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
                    <h3 className='text-center'><b>ViewOrderByBook</b></h3>
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

                                <button onClick={this.viewOrderByBook}>Update</button>
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

export default ViewOrderByBook