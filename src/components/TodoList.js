import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {


    handleItemClick(item, event) {
        
      }

    
    render() {
        const items = [ { text: 'Buy grocery', done: true },
        { text: 'Play guitar', done: false },
        { text: 'Romantic dinner', done: false }
        ];
        console.log(items)
        //const {items, onListClick } = this.props;
        //const prueba =  items.map((item, index) => <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)
        return (<ul /*onClick={onListClick}*/>
                {items.map((item, index) => <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
                </ul>);
      }




}
