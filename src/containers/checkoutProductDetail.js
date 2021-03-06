import React, { Component } from 'react';
import { connect } from 'react-redux';
//action creator import
import { totalProductPrice } from '../actions/action_total_item_price';
import { addProductPrice } from '../actions/action_add_price_total';
import { deleteProductPrice } from '../actions/action_delete_price_total';
import { removeProduct } from '../actions/action_remove_product';
//function by action creator -> action that is generated by action creator ends up flowing through all the different reducers.
import { bindActionCreators } from 'redux';

class CheckoutProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state  = { quantity: 1, price: this.props.product.price, applyCouponFlag: this.props.applyCouponFlag };
        this.minusQuantity = this.minusQuantity.bind(this);
        this.plusQuantity = this.plusQuantity.bind(this);

        //action called totalProductPrice
        this.props.totalProductPrice(this.state.price);
    }

    minusQuantity(event) {
        if (this.state.quantity > 1) {
            let newQuantity = this.state.quantity-1;
            let newPrice = (this.props.product.price * newQuantity);
            this.setState({ quantity: newQuantity, price: newPrice });
            this.props.deleteProductPrice(this.props.product.price);
        }
    }

    plusQuantity(event) {
        if(this.state.quantity < 10) {
            let newQuantity = this.state.quantity+1;
            let newPrice = (this.props.product.price * newQuantity);
            this.setState({ quantity: newQuantity, price: newPrice });
            this.props.addProductPrice(this.props.product.price);
        }
    }

    render() {
        return(
            <div className="col-sm-12 box effect1">
                <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src={this.props.product.image} className="img-responsive" />
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" onClick={this.minusQuantity}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </span>
                        <input type="text" className="form-control input-number" value={this.state.quantity} readOnly />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" onClick={this.plusQuantity} >
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9">
                    <div>{this.props.product.name}</div>
                    <h3>Rs. {this.state.price}</h3>
                    <button type="button" className="btn btn-default"
                        onClick={() => {
                            this.props.removeProduct(this.props.product);
                            this.props.deleteProductPrice(this.state.price);
                        }}>
                        REMOVE
                    </button>
                </div>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch) {
    //bindActionCreators => whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({
        totalProductPrice: totalProductPrice,
        addProductPrice: addProductPrice,
        deleteProductPrice: deleteProductPrice,
        removeProduct: removeProduct
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CheckoutProductDetail);