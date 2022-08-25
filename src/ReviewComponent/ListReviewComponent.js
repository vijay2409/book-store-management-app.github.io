import React, { Component } from 'react';
import ReviewService from '../Services/ReviewService';

class ListReviewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
        this.addBook=this.addBook.bind(this);
        this.editBook=this.editBook.bind(this);
    }

    editBook(){
        this.props.history.push('/updatebook')
    }

    componentDidMount(){
        ReviewService.listAllReviews().then((res)=>{
            this.setState({reviews: res.data});
            console.log(res.data);
        });
    }
    
    addBook(){
        this.props.history.push('/addbook');
    }

    render() {
        return (
            <div>
                <h2 className='text-center' align='center'><b>Reviews</b></h2>
                <div className='row'>
                 
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered' align='center' bgcolor='pink'>
                        <thead>
                            <tr>
                                <th>ReviewId</th>
                                <th>BookId</th>
                                <th>CustomerId</th>
                                <th>HeadLine</th>
                                <th>Comment</th>
                                <th>Rating</th>
                                <th>reviewOn</th>
                                {/* <th>customer</th> */}
                                <th>Actions</th>
                              <th>  <button className='btn btn-primary' onClick={this.addReview}>Add Book</button>  </th>
                            </tr>
                        </thead>

                        <tbody align='center' bgcolor='orange'>
                            {
                                this.state.reviews.map(
                                    review =>
                                        <tr key={review.reviewId}>
                                            <td>{review.reviewId}</td>
                                            <td>{review.book.bookId}</td>
                                            <td>{review.customer.customerId}</td>
                                            <td>{review.headLine}</td>
                                            <td>{review.comment}</td>
                                            <td>{review.rating}</td>
                                            <td>{review.reviewOn}</td>
                                           
                                             <td width='50px'><button>Edit</button></td>
                                        <td width='50px'><button>Delete</button></td>
                                        
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

export default ListReviewComponent;
