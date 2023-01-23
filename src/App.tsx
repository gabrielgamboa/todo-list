import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { EmptyTodos } from './components/EmptyTodos';
import { Todo } from './components/Todo';

import './global.module.css'
import styles from "./App.module.css";

export function App() {
    const [todos, setTodos] = useState([{
        id: uuidv4(),
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isCompleted: false,
    }]);

    function changeTodoStatus(todoId: string) {
        const todo = todos.find(todo => todo.id === todoId);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
            setTodos([...todos]);
        }
    }

    function handleCreateTodo(text: string) {
        const newTodo = {
            id: uuidv4(),
            title: text,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
    }

    function deleteTodo(todoId: string) {
        const todosWithoutDeletedOne = todos.filter(todo => todo.id !== todoId);
        setTodos(todosWithoutDeletedOne);
    }

    function completedTodosCount() {
        return todos.filter(todo => todo.isCompleted).length;
    }

    return (
        <div>
            <Header />
            <TodoForm onCreateTodo={handleCreateTodo} />
            <div className={styles.mainContent}>
                <div className={styles.createdAndFinishedTodos}>
                    <span className={styles.createdTasks}>
                        Tarefas criadas <span className={styles.counter}>{todos.length}</span>
                    </span>
                    <span className={styles.finishedTasks}>
                        Concluídas <span className={styles.counter}>{completedTodosCount()} de {todos.length}</span>
                    </span>
                </div>

                <div className={styles.todos}>
                    {todos.length === 0 ?
                        <EmptyTodos /> :
                        todos.map(todo => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                isCompleted={todo.isCompleted}
                                onChangeTodoStatus={changeTodoStatus}
                                onDeleteTodo={deleteTodo}
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}