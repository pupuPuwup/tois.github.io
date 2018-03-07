import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../styles/style-index.css'

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="tois-navbar navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a onClick={() => this.props.keyChange('')} className="navbar-brand pointers" id="logo"><strong>tois.id</strong></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <form className="navbar-form navbar-right" role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="head-nav"><a className="pointers" onClick={() => this.props.keyChange('')}>Home <span className="sr-only">(current)</span></a></li>
                                <li className="dropdown head-nav">
                                    <a to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="pointers" onClick={() => this.props.keyChange('Gundam')}>Gundam</a></li>
                                        <li><a className="pointers" onClick={() => this.props.keyChange('Hot Wheels')}>Hot Wheels</a></li>
                                        <li><a className="pointers" onClick={() => this.props.keyChange('Lego')}>Lego</a></li>
                                        <li><a className="pointers" onClick={() => this.props.keyChange('Tamiya')}>Tamiya</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;