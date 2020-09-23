import React from 'react';
import './Style.css'
import TodoList from './TodoList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
    }

    handleInput = (e) => {
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })

    }
    addItem = (e) => 
    {
        e.preventDefault();
        const currentItem = this.state.currentItem;
        if(currentItem !== ""){
            const items = [...this.state.items, currentItem];
            this.setState({
                items:items,
                currentItem:{
                    text:'',
                    key:''
                }
            });
        } 
    }

    deleteItem = (key) =>{
        // console.log(key);
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items:filteredItems
        })
    }
    render(){
        return(
            <div className='App ui container' >
                <form id='to-do-form' onSubmit={this.addItem}>
                <h1 className='todoTitle'>My Todo</h1>
                    <input
                        className='todoInput ui segment'
                        type='text'
                        placeholder='Enter task'
                        value= {this.state.currentItem.text}
                        onChange={this.handleInput}
                        />
                    {/* <button type='submit'>Add</button> */}
                </form>
                {/* <p>{this.state.items.text}</p> */}
                <TodoList 
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                />
                
            </div>
        );
    }
}


export default App;