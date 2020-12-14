import React from 'react'
import { Card, Typography , Space, Divider  } from 'antd'
// import { LoadingOutlined } from '@ant-design/icons';

export const AdminDashboard = (props) => {
    const { users } = props
    const { Title } = Typography
    // const enabled = users.filter((data) => data.enabled === 'True')
    const cardStyle = {width : 300 , backgroundColor : 'lightgrey' , textAlign : 'center'}
    // const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
    // const spinner = <Spin indicator={antIcon} />
    // const enabledUsers = users.filter((user) => user.enabled === true)
    // const enabledSize = enabledUsers.length
    // const disabledSize = users.length - enabledSize

    
    return(
        <Card bordered={false} style={{widows : 1300}}>
        <Divider orientation="center">Summary</Divider>
        <Space size={30} >
        {/* <Button type="primary" onClick={addUser} >Add</Button> */}
            <Card hoverable title="Registered Sellers" style={cardStyle} >
                <Title level={2}>11  </Title>
            </Card>
            <Card hoverable title="Total Products" style={cardStyle}>
                <Title level={2}>12 </Title>
            </Card>
            <Card hoverable title="Sold Products" style={cardStyle}>
                <Title level={2}> 10 </Title>
            </Card>
            <Card hoverable title="Available Products" style={cardStyle}>
                <Title level={2}> 0 </Title>
            </Card>
        </Space> </Card>
    )
}