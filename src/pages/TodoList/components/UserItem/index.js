import React, { useContext } from 'react'
import Button from '../../../../components/Button'
import { TodoListContext } from '../../../../TodoListProvider'

const UserItem = ({ data, i, onDuplicated }) => {
    const datas = useContext(TodoListContext)
    const { onDelete } = datas
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.age}</td>
            <td>
                <Button title="Edit" />
                <Button title="Duplicated" onClick={onDuplicated} />
                <Button title="Delete" onClick={() => onDelete(data.id)} />

            </td>
        </tr>
    )
}

export default UserItem