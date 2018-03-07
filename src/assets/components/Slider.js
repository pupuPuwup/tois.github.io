import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../styles/style-index.css'

class Slider extends Component {
    render(){
        return(
            <div className="tois-slider">
                <div className="container">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="images/toys-art-3-1.jpg" alt="Lorem Lorem" />
                            </div>
                            <div className="item">
                                <img src="images/toys-art-6-1.jpg" alt="Lorem Lorem" />
                            </div>
                            <div className="item">
                                <img src="images/toys-art-7-1.jpg" alt="Lorem Lorem" />
                            </div>
                            <div className="item">
                                <img src="images/toys-art-8-1.jpg" alt="Lorem Lorem" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;