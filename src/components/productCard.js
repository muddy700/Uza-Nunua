import React from 'react'
import { Card, Typography, Image, Button } from 'antd'
import { EnvironmentOutlined} from '@ant-design/icons';

export const ProductCard = (props) => {
    const {Meta } = Card
    const { setshowInfo, product, settingMode, showProductForm } = props

    return (
        <Card
            hoverable
            style={{width : 280,  }}>
            <Image alt="example" width={230} height={200} src={product.url} /> <br /> <br />
            <Meta title={product.name} />
            <span>TSH {product.price}</span> <br />
            <span> <EnvironmentOutlined  /> {product.location}</span>
            <Button type="primary" style={{float: 'right'}} hidden={settingMode} >View</Button> 
            <Button type="default" style={{float: 'right'}} hidden={!settingMode}>Disable</Button> 
            <Button type="primary" style={{float: 'right'}} hidden={!settingMode} onClick={showProductForm}>Edit</Button> 
        </Card>
    )
}

