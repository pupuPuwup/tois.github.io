import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './assets/components/Header';
import Slider from './assets/components/Slider'
import MainContent from './assets/components/MainContent';
import Footer from './assets/components/Footer';

import produk from './assets/json/products.json'
import PageProduct from './assets/pages/PageProduct';

class App extends Component {
  constructor() {
    super();
    this.state = {
      key: ''
    }
  }
  keyChange = key => this.setState({key});
  search = key => produk.filter(x => (new RegExp(key, 'gi').test(x.name) || x.kategori === key)).map(x => <PageProduct key={x.id} {...x}/>);
  render() {
    return (
      <div>
        <Header keyChange={this.keyChange.bind(this)}/>
        <Slider />
          {/* <MainContent/> */}
          <div className="container tois-content">
            {this.search(this.state.key)}
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
