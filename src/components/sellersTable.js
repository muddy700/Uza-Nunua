import { DeleteFilled, EditFilled } from '@ant-design/icons';
// import '../index.css'
// import  { deleteUser , deleteMult} from '../api'
import React , { useEffect, useState , useCallback } from 'react'
import { Card , Table , Button , Popconfirm, message , Input , Tag, Row, Col} from 'antd'
import { ProductCard} from './productCard'

export const SellersList = (props) => {
    const columns = [{
        title: 'Seller ID',
        dataIndex: 'id',
    },
    {
        title: 'Seller Name',
        dataIndex: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Status',
        dataIndex: 'enabled',
        render : (text , record) => (
            <Tag color={record.enabled ? 'green' : 'red'} >{record.enabled ? 'Enabled' : "Disabled"}</Tag>
        )
    },
    {
        title: 'No Of Products',
        dataIndex: 'size',
    },
    {
        title: 'Action1',
        dataIndex: 'action1',
        render : (text , record) =>
        dataList.length >=1 ? (
              <Button >Disable  </Button>
        ) : null,
    },
    {
        title: 'Action2',
        dataIndex: 'action2',
        render : (text , record) =>
        dataList.length >=1 ? (
            <Popconfirm title="Sure to delete?" >
              <Button type = "danger" > Delete </Button>
            </Popconfirm>
        ) : null,
    },
    {
        title: 'Action3',
        dataIndex: 'action2',
        render : (text , record) =>
        dataList.length >=1 ? (
            // <Popconfirm title="Sure to delete?" >
              <Button type="primary" onClick={() => handleDisplay(record.id)}>View Products</Button>
            // </Popconfirm>
        ) : null,
    },
]

const dataList = [
    {id: 1, username: 'Monko', email: 'monko@muddy.tz', phone: 1234, enabled: true, size: 7 },
    {id: 2, username: 'Chanhemo', email: 'chanhemo@muddy.tz', phone: 3422, enabled: false, size: 10 },
]
const { users , setUsers , editUserInfo , showUserForm, products } = props
const [selectedRowKeys, setSelectedRowKeys] = useState([])
const [loading , setloading ] = useState(false)
const [selectedUsers , setselectedUsers ] = useState([])
const [found, setfound] = useState('')
const [searchingMode, setsearchingMode] = useState(false)
const [searchString, setsearchString] = useState('')
const [filteredUsers, setfilteredUsers] = useState([])
const [showProducts, setshowProducts] = useState(false)
const [selectedProducts, setselectedProducts] = useState([])

const onSelectChange = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
      const selected = users.filter((data) => selectedRowKeys.includes(data.user_id))
      const selectedIds = selected.map((data) => {return data.user_id})
      setselectedUsers(selectedIds)
    }
    
    const deleteSingleUser = async (value) => {
        // setloading(true)
        // try{
        //     // let res = await deleteUser(value)

        //     if(res.status === 200){
        //         message.success('One User Deletd Successfull.....!!!!')
        //         setloading(false)
        //         const usersList = users.filter((user) => user.user_id !== value)
        //         setUsers(usersList)
        //     }
        // }
        // catch (err){
        //     message.error('User Not Deleted')
        // }
    }
    
const deleteUsers = async () => {
        setloading(true)
        // try {
            // let res = await deleteMult(selectedUsers)
            
        //     if(res[setselectedUsers.length -1].status === 200) {
        
        //         const remainingUsers = users.filter((user) => !selectedUsers.includes(user.user_id))
        //         setUsers(remainingUsers)
        //         const deleted = selectedUsers.length
        //         message.success(deleted + ' Users Deleted')
        //         setselectedUsers([])
        //         setSelectedRowKeys([])
        //         setloading(false)
        //     }
        // } catch (error) {
        //     message.error('Some Error Occured')
            
        // }
}

 const filterUser = useCallback((user) =>{
 for (const property in user) {
    if(user[property].toString().includes(searchString)) return  true
 }
 return false
 },[searchString]) 

const findUser =  (e) =>{
    setsearchString(e.target.value)

    }
    
    const hasSelected = selectedUsers.length > 0
    const selectedSize = selectedUsers.length
    const tableTitle = selectedUsers.length === 1 ? ' User Selected' : ' Users Selected'
    const trigger = loading ? loading : hasSelected

        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectChange,
        }
        
useEffect(() => {
 if(searchString){
 const filteredUsers = users.filter(filterUser)
 setfilteredUsers(filteredUsers)
 }

}, [searchString, users,filterUser])

    const productsList =  <Row gutter={[0, 24]} >
                            { selectedProducts.map((data) => {return <Col  span={6} key={data.id}>
                            <ProductCard  
                            settingMode={true} product={data} />  </Col>})}
                        </Row>
    const handleDisplay = (id) => {
        const singleSeller = products.filter((product) => product.sellerId === id)
        setselectedProducts(singleSeller)
        console.log(id)
        console.log(singleSeller)
        setshowProducts(!showProducts)
    }

        return(<>
            <Card title="All Sellers" style={{border: 'none'}} hidden={showProducts}>
            <Button type="primary" disabled={!trigger} onClick={deleteUsers} loading={loading}>Delete</Button>
            <span style={{ marginLeft: 8 }} >{hasSelected ? selectedSize + tableTitle : '' } </span>
            <Input placeholder="Type Anything To Search"  onChange={findUser} loading={searchingMode}  style={{width : 500, marginLeft : 200}}/>
            {/* <Button type="primary" style={{float : "right"}} onClick={showUserForm}>Add Seller</Button> */}
            <Card hidden={!found.user_id}>{!found ? ' User Not Found' : found.user_id + ' == ' + found.username + ' == ' + found.email + ' == ' + found.password + ' == ' + found.enabled} </Card>
            <Table rowSelection={rowSelection} columns={columns} dataSource={dataList} pagination={{defaultPageSize : 5}} rowKey={(record) => record.user_id} />
        </Card>
            <Card hidden={!showProducts}>
            <Button onClick={handleDisplay} >Back</Button>
                {productsList}
            </Card>
        </>
    )
}
