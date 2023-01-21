import { ClipboardText } from 'phosphor-react';

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
                        Tarefas criadas <span className={styles.counter}>0</span>
                    </span>
                    <span className={styles.finishedTasks}>
                        Concluídas <span className={styles.counter}>0</span>
                    </span>
                </div>

                <div className={styles.todos}>
                    <div className={styles.empty}>
                       <ClipboardText size={56} />
                       <div className={styles.emptyText}>
                           <p> Você ainda não tem tarefas cadastradas </p>
                           <p> Crie tarefas e organize seus itens a fazer </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}