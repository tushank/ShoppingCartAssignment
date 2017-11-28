import React, { Component } from 'react';

import { connect } from 'react-redux';
//action creator import
import { selectProduct } from '../actions/index';
//function by action creator -> action that is generated by action creator ends up flowing through all the different reducers.
import { bindActionCreators } from 'redux';
import './style.css';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { clickAddToCart: false };
    }

    render() {
        return(
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src={this.props.productData.image} className="img-responsive" />
                    <div className="caption">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 price">
                        <h2 className="cust-margin"><label>Rs {this.props.productData.price}</label></h2>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                        <a className="btn btn-success btn-product" disabled={this.state.clickAddToCart} onClick={() => {this.props.selectProduct(this.props.productData); this.setState({ clickAddToCart: true})}}>
                            <span className="glyphicon glyphicon-shopping-cart">
                            </span> Add To Cart
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    //bindActionCreators => whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({
        selectProduct: selectProduct
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProductDetail);