import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
export const TodoListContext = React.createContext()
const TodoListProvider = ({ children }) => {
    const [listStudent, setListStudent] = useState([
        {
            id: uuidv4(),
            username: "Thăng Long",
            email: "thanglong@gmail.com",
            age: 22
        },
        {
            id: uuidv4(),
            username: "Nguyễn Văn A",
            email: "thanglong@gmail.com",
            age: 23
        },
        {
            id: uuidv4(),
            username: "Nguyễn Văn B",
            email: "thanglong@gmail.com",
            age: 21
        },
    ])
    const [values, setValue] = useState('')
    const handleAddStudent = (data) => {
        const { username, email, age } = data
        setListStudent([...listStudent, {
            id: uuidv4(),
            username: username,
            email: email,
            age: age
        }])

    }
    const handleDlelete = (data) => {
        setListStudent(listStudent.filter(item => item.id !== data))
    };
    const handleSelect = e => {
        const selectedValue = e.target.value;
        setValue(selectedValue);

        if (selectedValue === "1") {
            setListStudent(_.orderBy(listStudent, ['age'], ['desc']));
        }
        if (selectedValue === "2") {
            setListStudent(_.orderBy(listStudent, ['age'], ['asc']));
        }
    }
    const handleDuplicate = (data) => {
        console.log(data);
        setListStudent([...listStudent, { ...data, id: uuidv4(), username: `(bản sao) ${data.username}` }])
    }
    const value = {
        dataStudent: listStudent,
        onAdd: handleAddStudent,
        onDelete: handleDlelete,
        handleSelect: handleSelect,
        values: values,
        onDuplicated: handleDuplicate
    }
    return (
        <TodoListContext.Provider value={value}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </TodoListContext.Provider>

    )
}

export default TodoListProvider