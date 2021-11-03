import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.webp';
import './index.css';


class AppHeader extends Component {

    render() {
        return (
            <Fragment>
                <Link to='/'>
                <img src={logo}
                    className='app-header-logo'
                    alt="logo" />
                    </Link>
            </Fragment>
        )
    }
}


export default AppHeader;