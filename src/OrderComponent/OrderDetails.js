import React, { Component } from 'react'
import OrderService from '../Services/OrderService'

export class OrderDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }
    componentDidMount() {
        OrderService.viewOrderDetails().then((responce) => {
            this.setState({ orders: responce.data });
            // console.log(responce.data);
        });
    }
    addOrder() {
        this.props.history.push('/addOrder');
    }
    updateOrder(orderDetailsId) {
        this.props.history.push(`/updateOrder/${orderDetailsId}`);
    }
    deleteOrder(orderDetailsId) {
        OrderService.deleteOrder(orderDetailsId).then(res => {
            this.setState({ orders: this.state.orders.filter(order => order.orderDetailsId !== orderDetailsId) });
        });
    }
    // deleteOrder(orderDetailsId){
    //     this.props.history.push(`/deleteOrder/${orderDetailsId}`);
    // }

    render() {
        return (
            <div>
                <h2 className='text-center'>OrderDetails</h2>
                <button type='button' onClick={() => this.props.history.push('/addOrder')} className="btn btn-info">AddOrder </button>

                <table align='center' className="table table-striped"  >

                    <thead>
                        <tr bgcolor='pink'>
                            <th width='100px' className='text-center'>OrderDetailsId</th>
                            <th width='100px' className='text-center'>BookID</th>
                            <th width='100px' className='text-center'>BookOrderId</th>
                            <th width='100px' className='text-center'>Quantity</th>
                            <th width='100px' className='text-center'>SubTotal</th>
                            <th width='100px' className='text-center'>Actions</th>

                        </tr>

                    </thead>
                    <tbody bgcolor='orange'>
                        {
                            this.state.orders.map(
                                order =>
                                    <tr key={order.orderDetailsId}>
                                        <td>{order.orderDetailsId}</td>
                                        <td>{order.book.bookId}</td>
                                        <td>{order.bookOrder.orderId}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.subtotal}</td>
                                        <td bgcolor='green'>    <button onClick={() => this.updateOrder(order.orderDetailsId)}
                                            style={{ marginLeft: "10px" }}
                                            type="button"
                                            title='Update Order'>UPDATE
                                        </button></td>

                                        <td bgcolor='red'><button color='red' style={{ marginLeft: "10px" }}
                                            onClick={() => this.deleteOrder(order.orderDetailsId)} type="button">DELETE
                                        </button></td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
                <div align='center'>
                </div>
            </div>

        )
    }
}

export default OrderDetails