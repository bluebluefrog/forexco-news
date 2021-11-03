import React, { Component, Fragment } from 'react';
import logo from './logo.webp';
import './index.css';

class AppHeader extends Component {

    render() {
        return (
            <Fragment>
                <img src={logo}
                    className='app-header-logo'
                    alt="logo" />
            </Fragment>
        )
    }
}


export default AppHeader;