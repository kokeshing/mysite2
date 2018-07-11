import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Timeline, List, Avatar } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = () => (
<BrowserRouter>
    <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
            <Menu.Item key="1">
                <Link to={process.env.PUBLIC_URL + "/"}>
                    <Icon type="home" />
                    <span className="nav-text">home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={process.env.PUBLIC_URL + "/about.me"}>
                    <Icon type="user" />
                    <span className="nav-text">about me</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to={process.env.PUBLIC_URL + "/blog"}>
                    <Icon type="edit" />
                    <span className="nav-text">blog</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                    <Icon type="contacts" />
                    <span className="nav-text">contact</span>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }}>
            <div style={{ marginLeft: 850 }}>
            <List>
                <List.Item>
                    <a href="https://github.com/kokeshing" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="github" />} title="" description=""/></a>
                    <a href="https://twitter.com/kokeshing_" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="twitter" />} title="" description=""/></a>
                    <a href="mailto:kou7cdb1a+site@gmail.com" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="mail" />} title="" description=""/></a>
                </List.Item>
            </List>
            </div>
        </Header>
      <Content style={{ margin: '24px 16px 24px', overflow: 'initial' }}>
            <div>
                <Route exact path='/' component={home}/>
                <Route path='/about.me' component={aboutme}/>
                <Route path='/blog' component={blog}/>
                <Route path='/contact' component={contact}/>
            </div>
      </Content>
    </Layout>
    </Layout>
</BrowserRouter>
)

const home = () => (
    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        <h1>KOTARO ONISHI</h1>
        <h2>Japanese Kuso Engineer</h2>
        <div style={{ padding: 24, textAlign: 'left' }}>
            <h2>History</h2>
            <Timeline>
                <Timeline.Item>2017/12 -<br/>Diverta Inc. Intern of Web Backend and Frontend</Timeline.Item>
                <Timeline.Item>2017/04 -<br/>Departments of the Faculty of Informatics and Engineering (Bachelor), The University of Electoro-Communications</Timeline.Item>
            </Timeline>
        </div>
    </div>
)

const aboutme = () => (
    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        <div style={{ padding: 24, textAlign: 'left' }}>
            <h2>Interesting</h2>
            <List>
                <List.Item>
                    <List.Item.Meta avatar={<Avatar icon="share-alt" />} title="Machine Learning" description="Computer Vison, Converted Speech"/>
                    <List.Item.Meta avatar={<Avatar icon="global" />} title="Web App" description="Progressive Web App, WebAssembly"/>
                </List.Item>
            </List>
        </div>
    </div>
)

const blog = () => (
    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

    </div>
)

const contact = () => (
    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

    </div>
)


export default App;
