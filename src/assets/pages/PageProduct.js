import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../styles/style-index.css'

class PageProduct extends Component {
    render(){
        return(
            <div className="product-mini">
                <a href="#"><img src={this.props.gambar} className="tc-item-img img-responsive" /></a>
                <div className="text-center">
                    <a href="#">{this.props.nama}</a>
                    <p>Rp. {this.props.harga}</p>
                </div>
            </div>
        )
    }
}

export default PageProduct;