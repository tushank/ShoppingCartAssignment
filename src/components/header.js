import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" >Shopping Cart</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to='/'>Home</Link></li>
                    <li><Link to='/cart'>Cart</Link ></li>
                    <li><Link to='/checkout'>Checkout</Link></li>
                    <li><Link to='/about'>AboutUs</Link></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Header;