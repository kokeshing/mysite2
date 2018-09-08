import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'antd';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="iconbox">
                    <Link to="/aboutme"><Icon type="info-circle" theme="filled" /></Link>
                    <a href="mailto:kou7cdb1a+site@gmail.com"><Icon type="mail" theme="filled" /></a>
                    <a href="https://github.com/kokeshing"><Icon type="github" theme="filled" /></a>
                    <a href="https://twitter.com/kokeshing_"><Icon type="twitter" theme="outlined" /></a>
                </div>
                <div id="title">
                    <Link to="/"><h1>LOST IN <span id="blue">BLUE</span></h1></Link>
                </div>
            </div>
        );
    }
}

export default Header;