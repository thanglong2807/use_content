import React, { useContext } from 'react'
import { SelectStyle } from './Select.style';
import { TodoListContext } from '../../TodoListProvider';

const Select = (props) => {
    const {
        data
    } = props;
    const dataSelect = useContext(TodoListContext)
    const { handleSelect, values } = dataSelect;
    return (
        <SelectStyle>
            <select value={values} onChange={(e) => handleSelect(e)} className='select'>
                {data.map(select =>
                    <option className='option' key={select.id} value={select.value}>

                        {select.title}
                    </option>)}
            </select>
        </SelectStyle>
    )
}

export default Select