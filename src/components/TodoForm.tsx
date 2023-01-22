import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

import styles from "./TodoForm.module.css"

interface TodoFormProps {
    onCreateTodo: (text: string) => void;
}

export function TodoForm({ onCreateTodo }: TodoFormProps) {
    const [text, setText] = useState('');

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        onCreateTodo(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.form}>
            <input onChange={(event) => setText(event.target.value)} placeholder="Adicione uma nova tarefa" type="text" />
            <button>Criar <PlusCircle size={16} /></button>
        </form>
    )
}