import React, { useContext, useState } from 'react'
import Input from '../../components/Inputs'
import "./style.css"
import Select from '../../components/Select'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../components/Button'
import ListStudent from './components/ListStudents'
import { TodoListContext } from '../../TodoListProvider'
const TodoList = () => {
    const [value, setValue] = useState({
        username: '',
        email: '',
        age: "",
        search: ''
    })

    const handleValueChange = (e) => {
        const valuetext = e.target.value
        const name = e.target.name
        setValue({
            ...value,
            [name]: valuetext
        })
    }
    const dataSelection = [
        {
            id: uuidv4(),
            title: "Tuổi từ cao xuống thấp",
            value: "1"
        },
        {
            id: uuidv4(),
            title: "Tuổi từ thấp đến cao",
            value: "2"
        },


    ]
    const data = useContext(TodoListContext)
    const { onAdd } = data
    const handleAdd = () => {

        onAdd(value)
        setValue({
            username: '',
            email: '',
            age: ""
        })
    }
    const handleSearch = (e) => {
        handleValueChange(e)
    }
    return (
        <div className='form_todo'>
            <h2> Todo list</h2>
            <Input
                titleLabel="username"
                type="text"
                placeholder="Nhập Username..."
                name="username"
                value={value.username}
                onChange={handleValueChange}
            />
            <Input
                titleLabel="Email"
                type="text"
                placeholder="Nhập Email..."
                name="email"
                value={value.email}
                onChange={handleValueChange}
            />
            <Input
                titleLabel="Age"
                type="text"
                placeholder="Nhập Age..."
                name="age"
                value={value.age}
                onChange={handleValueChange}
            />
            <Button title="Add Student" classBtn='btn_todo' onClick={handleAdd} />
            <Select data={dataSelection} />
            <h2>Search user</h2>
            <Input
                titleLabel="Search User"
                type="text"
                placeholder="Nhập Username..."
                name="search"
                value={value.search}
                onChange={handleSearch}
            />
            <h2>List User</h2>
            <ListStudent searchUser={value.search} />
        </div>
    )
}

export default TodoList