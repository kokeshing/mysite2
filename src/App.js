import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Blog from './Blog';
import Article from './Article';
import './reset.css';
import './antd.css';
import './index.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Route exact path='/' component={Blog}/>
                    <Route path='/aboutme' component={Aboutme}/>
                    <Route path='/articles/:id' component={Article}/>
                    <Footer/>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
