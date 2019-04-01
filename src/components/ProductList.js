import React,{Component} from 'react';
import Product from './Product';
import Title from  './Title';
// import {storeProducts, detailProduct} from '../data';
import {ProductConsumer} from '../context';
class ProductList extends Component{
    // constructor(props){
    //     super(props);
        // this.state = {
        //     products: storeProducts
        // };
    // }
    render(){
        return(
            <div>
                <h3>
                    <React.Fragment>
                        <div className="py-5">
                            <div className="container">
                                <Title name="our" title="products"/>
                                <div className="row">
                                <ProductConsumer>
                                    {(value) => {
                                        return value.products.map((product) => {
                                            return <Product key={product.id} 
                                            product={product}/>
                                        })
                                    }}
                                </ProductConsumer>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </h3>
            </div>
        );
    }
}

export default ProductList;
