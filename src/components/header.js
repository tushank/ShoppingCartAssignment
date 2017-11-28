import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
        this.renderProductNumber = this.renderProductNumber.bind(this);
    }

    renderProductNumber(activeProductList) {
        if(activeProductList > 0) {
            return <span>[{activeProductList}]</span>
        }
    }

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
                    <li><Link to='/checkout'>Checkout<span>{this.renderProductNumber(this.props.ActiveProduct.length)}</span></Link></li>
                    <li><Link to='/about'>AboutUs</Link></li>
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        ActiveProduct: state.ActiveProduct
    };
}

export default connect(mapStateToProps)(Header);