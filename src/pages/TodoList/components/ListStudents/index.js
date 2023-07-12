import React, { useContext, useEffect, useState } from 'react'
import UserItem from '../UserItem'
import { TodoListContext } from '../../../../TodoListProvider'

const ListStudent = ({ searchUser }) => {
    const data = useContext(TodoListContext)
    const [dataUser, setDataUser] = useState([])
    const { dataStudent, onDuplicated } = data
    useEffect(() => {
        setDataUser(dataStudent)
    }, [dataStudent])
    useEffect(() => {
        searchUser ? setDataUser(dataStudent.filter(item => item.username.toLowerCase().includes(searchUser.toLowerCase()))) : setDataUser(dataStudent)
    }, [searchUser])

    return (
        <div>
            <table cellPadding={40} cellSpacing={0} border={1}>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>username</td>
                        <td>email</td>
                        <td>age</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.length ? (dataUser.map((item, i) => <UserItem key={item.id} onDuplicated={() => onDuplicated(item)} i={i} data={item} />)) : null}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent