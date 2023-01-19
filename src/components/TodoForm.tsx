import { PlusCircle } from "phosphor-react";

import styles from "./TodoForm.module.css"

export function TodoForm() {
    function handleNewTodo() {

    }

    return (
        <form className={styles.form} onSubmit={handleNewTodo}>
            <input placeholder="Adicione uma nova tarefa" type="text" />
            <button>Criar <PlusCircle size={16} /></button>
        </form>
    )
}