import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from "./App.module.css";

import './global.module.css'

export function App() {
    return (
        <div>
            <Header/>
            <TodoForm/>
            <div className={styles.mainContent}>
                <div className={styles.createdAndFinishedTodos}>
                    <span className={styles.createdTasks}>
                        Tarefas criadas 0</span>
                    <span className={styles.finishedTasks}>Concluídas 0</span>
                </div>
            </div>
        </div>
    )
}