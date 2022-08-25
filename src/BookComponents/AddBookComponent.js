import React, { Component } from 'react'
import BookService from '../Services/BookService';
import './AddBook.css';


class AddBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
            category: {
                categoryName: '',
            },
            description: '',
            isbn: '',
            price: 0.0,
            publishDate: '',
            lastUpdatedOn: ''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeCategoryName = this.changeCategoryName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeIsbn = this.changeIsbn.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changePublishDate = this.changePublishDate.bind(this);
        this.changeLastUpdatedOn = this.changeLastUpdatedOn.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook = (event) => {
        event.preventDefault();
        let category = { categoryName: this.state.categoryName }
        let book = {
            title: this.state.title, author: this.state.author, category, description: this.state.description,
            isbn: this.state.isbn, price: this.state.price, publishDate: this.state.publishDate, lastUpdatedOn: this.state.lastUpdatedOn
        };
        console.log('book=>' + JSON.stringify(book));

        BookService.createBook(book).then(res => {
            if (res.status === 200)
                alert('book successfully added')
            else
                Promise.reject()
        })
        .catch(err => alert('Error'))

    }

    changeTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    changeAuthor = (event) => {
        this.setState({ author: event.target.value });
    }

    changeCategoryName = (event) => {
        this.setState({ categoryName: event.target.value });
    }

    changeDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    changeIsbn = (event) => {
        this.setState({ isbn: event.target.value });
    }

    changePrice = (event) => {
        this.setState({ price: event.target.value });
    }

    changePublishDate = (event) => {
        this.setState({ publishDate: event.target.value });
    }

    changeLastUpdatedOn = (event) => {
        this.setState({ lastUpdatedOn: event.target.value });
    }

    cancel() {
        this.props.history.push('/getallbooks')
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='ard col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'><b>Add Book</b></h3>
                            <div className='card-body'>
                                <form name='addbook' className='add-customer' action='' >

                                    <div className='form-group'>
                                        <label>Title:</label>
                                        <input type='text' placeholder='Title' name='title' minLength='5' title='Enter a valid Title' className='form-control'
                                            value={this.state.title} onChange={this.changeTitle} required ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Author:</label>
                                        <input type='text' placeholder='Author' name='author' minLength='3' title='Enter a valid Author' className='form-control'
                                            value={this.state.author} onChange={this.changeAuthor} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Category Name:</label>
                                        <input type='text' placeholder='Category Name' name='categoryName' minLength='5' title='Enter a valid CategoryName' className='form-control'
                                            value={this.state.categoryName} onChange={this.changeCategoryName} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Description:</label>
                                        <input type='text' placeholder='Description' name='description' minLength='5' className='form-control'
                                            value={this.state.description} onChange={this.changeDescription} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>ISBN:</label>
                                        <input type='text' placeholder='ISBN' name='isbn' minLength='17' maxLength='17' className='form-control'
                                            value={this.state.isbn} onChange={this.changeIsbn} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Price:</label>
                                        <input type='number' name='price' className='form-control'
                                            value={this.state.price} onChange={this.changePrice} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>PublishDate:</label>
                                        <input type='date' name='publishDate' className='form-control'
                                            value={this.state.publishDate} onChange={this.changePublishDate} required></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>LastUpdatedOn:</label>
                                        <input type='date' name='lastUpdatedOn' className='form-control'
                                            value={this.state.lastUpdatedOn} onChange={this.changeLastUpdatedOn} required></input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveBook} >Save</button>
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

export default AddBookComponent