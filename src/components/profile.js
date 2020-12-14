import { Card , Image , Space , Divider , Col , Row }  from 'antd'
import '../App.css'
const { Meta } = Card
const rowStyle = { marginTop : 12 ,  }
const colStyle = { fontWeight : 'bold' , }

export const Profile = (props) => {
    const {loggedUser} = props
    // const name = loggedUser.firstName + ' ' + loggedUser.lastName
    return(
        <Space size={200} style={{}}>
            <Card style={{ width : 600 }} >
                <Divider orientation = "center" > Personal Info </Divider>
                <Row style={rowStyle}>
                    <Col span={6} style={colStyle}> UserName: </Col>
                    <Col span={12}> New Seller </Col>
                </Row>
                <Row  style={rowStyle} >
                    <Col span={6} style={colStyle}> Phone Number: </Col>
                    <Col span={12}> 0789 101 112 </Col>
                </Row>
                <Row style={rowStyle} >
                    <Col span={6} style={colStyle}> Email: </Col>
                    <Col span={12}> user@gmail.com </Col>
                </Row>
            </Card>

            <Card title="Photo" style={{width : 400 , textAlign : 'center' }}>
                <Card  hoverable  style={{ width: 250 , marginLeft : 50}} >
                    <Image width={200} height={200} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />  <br /> <br />
                    <Meta title="New User" style={{textAlign : 'center'}} />
                </Card>
            </Card>
        </Space>
    )
}