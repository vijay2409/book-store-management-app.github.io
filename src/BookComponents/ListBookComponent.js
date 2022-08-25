import React, { Component } from 'react';
import BookService from '../Services/BookService';

class ListBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(bookId) {
        BookService.deleteBook(bookId).then(res => {
            this.setState({ books: this.state.books.filter(book => book.bookId !== bookId) });
        });
    }

    editBook(bookId) {
        this.props.history.push(`/updatebook/${bookId}`);
    }

    componentDidMount() {
        BookService.listAllBooks().then((res) => {
            this.setState({ books: res.data });
        });
    }

    addBook() {
        this.props.history.push('/addbook');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'><b>Book List</b></h2>
                {/* <tr>
                   <td>
                   <button type='button'  className='btn btn-primary' onClick={this.addBook}>Add Book</button>
                   </td>
                </tr> */}
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr  color='cyan' bgcolor='pink'>
                                {/* <th>Book Id</th> */}
                                <th className='text-center'>Book Title</th>
                                <th className='text-center'h>Book Author</th>
                                {/* <th>Category Id</th> */}
                                <th className='text-center'>Category Name</th>
                                <th className='text-center'>Description</th>
                                <th className='text-center'>ISBN</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>PublishDate</th>
                                <th className='text-center'>LastUpdateOn</th>
                                <th className='text-center'>Actions </th>
                            </tr>
                        </thead>

                        <tbody bgcolor='grey'>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr key={book.bookId}>
                                            {/* <td>{book.bookId}</td> */}
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            {/* <td>{book.category.categoryId}</td> */}
                                            <td>{book.category.categoryName}</td>
                                            <td>{book.description}</td>
                                            <td>{book.isbn}</td>
                                            <td>{book.price}</td>
                                            <td>{book.publishDate}</td>
                                            <td>{book.lastUpdatedOn}</td>
                                            <td>
                                            <button type='button' onClick={() => this.editBook(book.bookId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft:'10px'}} type='button' onClick={() => this.deleteBook(book.bookId) } className="btn btn-danger">Delete </button>
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

export default ListBookComponent;
