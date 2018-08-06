import React, { Components } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Timeline, List, Avatar } from 'antd';
import Product from './Product';
import './reset.css';
import './App.css';

const { Header, Content, Sider } = Layout;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: window.parent.screen.width > 800 ? false : true,
            collapsedwidth: window.parent.screen.width > 500 ? 80 : 0,
        };
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return (
            <BrowserRouter>
                <Layout hasSider={true}>
                    <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth={this.state.collapsedwidth}>
                    <div className="logo" style={{ textAlign: 'center', color: '#fff'}}>
                        🙇
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                            <Link to={process.env.PUBLIC_URL + "/product"}>
                                <Icon type="appstore-o" />
                                <span className="nav-text">product</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={process.env.PUBLIC_URL + "/blog"}>
                                <Icon type="edit" />
                                <span className="nav-text">blog</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={process.env.PUBLIC_URL + "/contact"}>
                                <Icon type="contacts" />
                                <span className="nav-text">contact</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: 'white', padding: 0 }}>
                        <div id="header-wrapper">
                        <List>
                            <List.Item>
                                <a href="https://github.com/kokeshing" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="github" />} title="" description=""/></a>
                                <a href="https://twitter.com/kokeshing_" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="twitter" />} title="" description=""/></a>
                                <a href="mailto:kou7cdb1a+site@gmail.com" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="mail" />} title="" description=""/></a>
                            </List.Item>
                        </List>
                        </div>
                    </Header>
                  <Content>
                        <div id="wrapper">
                            <Route exact path='/' component={home}/>
                            <Route path='/about.me' component={aboutme}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/blog' component={blog}/>
                            <Route path='/contact' component={contact}/>
                        </div>
                  </Content>
                </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

const home = () => (
    <div id="contents-wrapper">
        <h1 style={{ margin: 24 }}>Welcome!!</h1>
        <h1>🙇</h1>
    </div>
)

const aboutme = () => (
    <div id="contents-wrapper">
        <h1>KOTARO ONISHI</h1>
        <div style={{ padding: 24, textAlign: 'left' }}>
            <h2 style={{ marginTop: 24 }}>Profile</h2>
            <List>
                <List.Item>
                    <List.Item.Meta avatar={<Avatar icon="calendar" />} title="Birth" description="1997"/>
                    <List.Item.Meta avatar={<Avatar icon="team" />} title="Organization" description="UEC CAT2"/>
                    <List.Item.Meta avatar={<Avatar icon="home" />} title="Living" description="Tokyo"/>
                </List.Item>
            </List>
            <h2 style={{ marginTop: 24, marginBottom: 24 }}>History</h2>
            <Timeline>
                <Timeline.Item>2017/12 -<br/>Diverta Inc. Intern of Web Backend and Frontend</Timeline.Item>
                <Timeline.Item>2017/04 -<br/>Departments of the Faculty of Informatics and Engineering (Bachelor), The University of Electoro-Communications</Timeline.Item>
            </Timeline>
            <h2 style={{ marginTop: 24 }}>Interesting</h2>
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
    <div id="contents-wrapper">
        <h1>🙇 now developing 🙇</h1>
    </div>
)

const contact = () => (
    <div id="contents-wrapper">
        <List>
            <List.Item>
                <a href="https://twitter.com/kokeshing_" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="twitter" />} title="Twitter" description=""/></a>
                <a href="mailto:kou7cdb1a+site@gmail.com" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="mail" />} title="Mail" description=""/></a>
            </List.Item>
        </List>
    </div>
)


export default App;
