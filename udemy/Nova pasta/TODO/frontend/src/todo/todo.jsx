import React from 'react';

import Pageheader from '../template/pageheader';
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => {
        return(
            <div>
                <Pageheader name='tarefas' small='cadastros'></Pageheader>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>
        )
}