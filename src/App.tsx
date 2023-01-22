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

    function handleChangeCheck(todoId: string) {
        const todo = todos.find(todo => todo.id === todoId);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
            setTodos([...todos]);
        }
    }

    return (
        <div>
            <Header />
            <TodoForm />
            <div className={styles.mainContent}>
                <div className={styles.createdAndFinishedTodos}>
                    <span className={styles.createdTasks}>
                        Tarefas criadas <span className={styles.counter}>0</span>
                    </span>
                    <span className={styles.finishedTasks}>
                        Concluídas <span className={styles.counter}>0</span>
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
                                onChangeTodoStatus={handleChangeCheck}
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}