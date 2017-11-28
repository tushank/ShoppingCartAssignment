import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import CheckoutProductDetail from '../containers/checkoutProductDetail';
import { applyCouponCode } from '../actions/action_apply_coupon';
import { bindActionCreators } from 'redux';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { couponCode: '', applyCouponFlag: false};
        this.renderProductItem = this.renderProductItem.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    renderProductItem(product) {
        return (
            <CheckoutProductDetail
              key={product.id}
              product={product}
              applyCouponFlag={this.state.applyCouponFlag}
            />
        );
    }

    onInputChange(event) {
        this.setState({ couponCode: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log('coupon code : ',this.state.couponCode);
        this.props.applyCouponCode(this.state.couponCode, this.props.TotalProductPrice);
    }

    applyCoupon() {

    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <h1>Checkout</h1>
                    <div className="container">
                        <h3>My Cart</h3>
                        <div className="col-sm-8">
                            {this.props.ActiveProduct.map(this.renderProductItem)}
                        </div>
                        <div className="col-sm-3">
                            <div className="panel panel-default">
                            <div className="panel-heading">PRICE DETAILS</div>
                            <div className="panel-body">
                                Price ({this.props.ActiveProduct.length} item) : {this.props.TotalProductPrice}
                                <div>
                                    Coupon Code :
                                    <input type="text"
                                      className="input-box-cust-style"
                                      value={this.state.couponCode}
                                      onChange={this.onInputChange}
                                    />
                                    <button type="submit" className="btn btn-default" >
                                        Apply Coupon
                                    </button>
                                </div>
                                <hr className="dash" />
                                <div>
                                    TOTAL PRICE : {this.props.TotalPriceAfterCoupon}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ActiveProduct: state.ActiveProduct,
        TotalProductPrice: state.TotalProductPrice,
        TotalPriceAfterCoupon: state.ApplyDiscount
    };
}

function mapDispatchToProps(dispatch) {
    //bindActionCreators => whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({
        applyCouponCode: applyCouponCode
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);