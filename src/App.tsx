import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from "./App.module.css";

import './global.module.css'

export function App() {
    return (
        <div>
            <Header/>
            <TodoForm/>
        </div>
    )
}