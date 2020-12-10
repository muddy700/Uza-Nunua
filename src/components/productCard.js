import React from 'react'
import { Card, Typography, Image} from 'antd'
import { } from '@ant-design/icons';

export const ProductCard = () => {
    const {Meta } = Card
    // const { Title } = Typography

    return (
        <Card
            hoverable
            style={{width : 280,  }}>
            <Image alt="example" width={230} height={200} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> <br /> <br />
            <Meta title="Laptop" />
            <span>TSH 450,000</span> <br />
            <span>Location : Cive</span>
        </Card>
    )
}

