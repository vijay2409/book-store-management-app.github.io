import React, { Component } from 'react'
import LoginService from '../Services/LoginService'


class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookId: this.props.match.params.bookId,
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
        this.updateBook = this.updateBook.bind(this);
    }

    componentDidMount() {
        LoginService.listBooksByCategory(this.state.categoryName).then((res) => {
            let book = res.data;
            this.setState({
                title: book.title,
                author: book.author,
                categoryName: this.categoryName,
                description: this.description,
                isbn: this.isbn,
                price: this.price,
                publishDate: this.publishDate,
                lastUpdatedOn: this.lastUpdatedOn
            });
        });
    }

    updateBook = (event) => {
        event.preventDefault();
        let category={categoryName: this.state.categoryName}
        let book = {
            title: this.state.title, author: this.state.author, category, description: this.state.description,
            isbn: this.state.isbn, price: this.state.price, publishDate: this.state.publishDate, lastUpdatedOn: this.state.lastUpdatedOn
        };
        console.log('book=>' + JSON.stringify(book));
        console.log('bookId=>' + JSON.stringify(this.state.bookId));

        LoginService.updateBook(book, this.state.bookId).then(res => {
            if (res.status === 200)
                alert('book updated successfully')
            else
                Promise.reject()
        }).catch(err => alert('Error'))

    }



    changeTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    changeAuthor = (event) => {
        this.setState({ author: event.target.value });
    }

    changeCategoryId = (event) => {
        this.setState({ categoryId: event.target.value });
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
                            <h3 className='text-center'><b>UpdateBook</b></h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Title:</label>
                                        <input type='text' placeholder='Title' name='title' className='form-control'
                                            value={this.state.title} onChange={this.changeTitle}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Author:</label>
                                        <input type='text' placeholder='Author' name='author' className='form-control'
                                            value={this.state.author} onChange={this.changeAuthor}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Category Id:</label>
                                        <input type='text' placeholder='Category Id' name='categoryId' className='form-control'
                                            value={this.state.categoryId} onChange={this.changeCategoryId}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Category Name:</label>
                                        <input type='text' placeholder='Category Name' name='categoryName' className='form-control'
                                            value={this.state.categoryName} onChange={this.changeCategoryName}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Description:</label>
                                        <input type='text' placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} onChange={this.changeDescription}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>ISBN:</label>
                                        <input type='text' placeholder='ISBN' name='isbn' className='form-control'
                                            value={this.state.isbn} onChange={this.changeIsbn}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Price:</label>
                                        <input type='number' name='price' className='form-control'
                                            value={this.state.price} onChange={this.changePrice}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>PublishDate:</label>
                                        <input type='date' name='publishDate' className='form-control'
                                            value={this.state.publishDate} onChange={this.changePublishDate}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>LastUpdatedOn:</label>
                                        <input type='date' name='lastUpdatedOn' className='form-control'
                                            value={this.state.lastUpdatedOn} onChange={this.changeLastUpdatedOn}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateBook}>Update</button>
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

export default Update