import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    renderProduct(productData) {

        return (
            <ProductDetail key={productData.id} productData={productData} />
        );
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                    </div>
                        {this.props.product.map(this.renderProduct)}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { product: state.product };
}

export default connect(mapStateToProps)(Cart);
