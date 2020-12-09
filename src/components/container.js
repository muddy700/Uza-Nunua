import React from 'react'
import { Typography , Layout , Menu , Breadcrumb} from 'antd'
import {DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

export const Container = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography

    return (
        // <div>
            <Layout style={{height : 800}}>
                <Sider style={{backgroundColor : 'lightblue'}}>
                    <div className="logo" />
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                        Option 2
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                        <Menu.Item key="7" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                        <Menu.Item key="8" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor : 'lightgray', height : 110}}>Header</Header>
                    <Content style={{backgroundColor : 'gray'}}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        // </div>
    )
}

