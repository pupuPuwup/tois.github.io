import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../styles/style-index.css'

class Footer extends Component {
    render(){
        return(
                <div className="tois-footer">
                    <div className="container text-center">
                        <div className="col-md-4"></div>
                            <div className="social-links col-md-4">
                                <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.github.com" target="_blank"><i className="fa fa-github"></i></a>
                                <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
                                <p className="text-center">&copy; 2018 Pandu Perdana. All Rights Reserved.</p>
                            </div>
                        <div className="col-md-4"></div>
                    </div>
                </div> 
        )
    }
}

export default Footer;