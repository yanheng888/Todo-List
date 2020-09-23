import React from 'react';
import './TodoList.css'

function TodoList(props){
    const items = props.items;
    const renderedList = items.map(item => {
        return (
        <div className='todoItem ui segment' key={item.key}>
            
            <p>
                <label id='checkbox-label'>
                    <input type="checkbox" className="todo-checkbox"/>
                        <label className='todoItemText' htmlFor='todo-checkbox'>{item.text}</label>
                </label>
                
                 <i className='trash icon' onClick={() => {
                     props.deleteItem(item.key)
                     }}/>
                <i className='edit icon' />
            </p>

        </div>);
        
    })

    return <div className='todoList'>
        {renderedList}
    </div>
};

export default TodoList;