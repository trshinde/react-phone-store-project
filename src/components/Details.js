import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
// import { detailProduct } from '../data';


class Details extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ProductConsumer>
                {(value) => {
                const {id, title, img, price, inCart, company, info} =  value.detailProduct;
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} alt="product" className="img-fluid"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model : {title}</h2>
                                <h4 className="text-muted text-uppercase mt-3 mb-2">
                                 made by: <span className="text-uppercase ">{company}</span>
                                </h4>
                                <h4 className="text-blue mt-3">
                                    <strong>price: <span>$</span>{price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product: 
                                <p className="text-muted lead">{info}</p>
                                </p>
                                {/* buttons */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>back to products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart
                                    disabled = {inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id)
                                    }}>
                                        {inCart ? 'inCart' : 'add to cart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;