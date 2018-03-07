import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class WingGundam extends Component {
    render(){
        return(
            <div>    
                <div class="col-md-9">
                    <div class="thumbnail">
                        <div class="row">
                            <div class="col-sm-6">
                                <img class="img-responsive" src={this.props.gambar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h4 class="pull-right">{this.props.harga}</h4>
                    <h4><a href="product.html">{this.props.nama}</a></h4>
                    <p>{this.props.detail}</p>
                </div>
                <form role="form">
                    <div class="number form-group">
                        <label class="control-label" for="number">Jumlah</label>
                        <input type="number" class="form-control input-sm" id="number" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Add to Cart</button>
                    </div>
                </form>
            </div>
        )
    }
}