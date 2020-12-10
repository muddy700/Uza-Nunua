import React from 'react'
import { Space, Card} from 'antd'

export const PageFooter = () => {
    const Style = {width: 400, height: 400, textAlign: 'center', backgroundColor: 'gray', border: 'none'}
    return (
        <Space size={25} style={{padding:30}}>
            <Card title="About Us" style={Style}></Card>
            <Card title="Contact Us" style={Style}></Card>
            <Card title="Follow Us" style={Style}></Card>
        </Space>
    )
}
