import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from "./App.module.css";

import './global.module.css'
import { useState } from 'react';
import { EmptyTodos } from './components/EmptyTodos';

export function App() {
    const [todos, setTodos] = useState([1]);
    const [checked, setChecked] = useState(false);

    function handleChangeCheck() {
        setChecked(!checked);
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
                        <div className={styles.todo}>
                            {checked ?
                                <CheckCircle onClick={handleChangeCheck} className={styles.uncheckedTodo} size={24} /> :
                                <Circle onClick={handleChangeCheck} className={styles.uncheckedTodo} size={24} />
                            }
                            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                            <Trash size={24} />
                        </div>
                        // todos.map(todo => (

                        // ));
                    }
                </div>
            </div>
        </div >
    )
}