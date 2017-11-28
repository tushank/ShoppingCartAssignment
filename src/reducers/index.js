import { combineReducers } from 'redux';
import ProductListReducer from './reducer_product_list';
import ActiveProduct from './reducer_selected_product_list';
import TotalProductPrice from './reducer_total_price';
import AddPrice from './reducer_add_price';
import ApplyDiscount from './reducer_apply_discount';



const rootReducer = combineReducers({
    product: ProductListReducer,
    ActiveProduct: ActiveProduct,
    TotalProductPrice: TotalProductPrice,
    AddPrice: AddPrice,
    ApplyDiscount: ApplyDiscount
  });

export default rootReducer;
