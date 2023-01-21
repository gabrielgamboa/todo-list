import { ClipboardText } from 'phosphor-react';

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from "./App.module.css";

import './global.module.css'
import { useState } from 'react';
import { EmptyTodos } from './components/EmptyTodos';

export function App() {
    const [todos, setTodos] = useState([]);

    console.log(todos);

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
                    {todos.length === 0 ? (
                        <EmptyTodos />
                    ) : <h1>teste</h1>}
                </div>
            </div>
        </div >
    )
}