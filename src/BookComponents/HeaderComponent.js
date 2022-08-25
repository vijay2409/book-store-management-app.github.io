import React from 'react'

const HeaderComponent = () => {
    return (
        <>
            <nav className='main-nav'>

                <div className='logo'>
                    <h2>
                        <a href='/'>
                            <span>B</span>OOK
                            <span>S</span>TORE
                            <span>M</span>ANAGEMENT
                            <span>A</span>PP
                        </a>
                    </h2>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/addbook'>Add Book</a>
                        </li>
                        <li>
                            <a href='/getallbooks'>All Books</a>
                        </li>
                        <li>
                            <a href='/listallcustomer'>All Customer</a>
                        </li>
                        <li>
                            <a href='/viewOrderDetails'>All Order</a>
                        </li>
                        <li>
                            <a href='/allreview'>All Review</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default HeaderComponent
