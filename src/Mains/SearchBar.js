import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className='topnav'>
                <a className='active' href='/getallbooks'></a>
                <input type='text' placeholder='Search'/>
            </div>
        );
    }
}

export default SearchBar;


