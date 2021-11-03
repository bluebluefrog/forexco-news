import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import AppHeader from './Header/index.js';
import './index.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header className='header'>
            <AppHeader />
          </Header>
          <Content className='content'>
            1</Content>
          <Footer className='footer'>
            2
          </Footer>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
