import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./TodoForm.module.css"

interface TodoFormProps {
    onCreateTodo: (text: string) => void;
}

export function TodoForm({ onCreateTodo }: TodoFormProps) {
    const [text, setText] = useState('');

    function handleNewText(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);

    }

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        onCreateTodo(text);
        setText('');
    }


    const isInputTextEmpty = text.length === 0;

    return (
        <form onSubmit={handleSubmitForm} className={styles.form}>
            <input
                required
                onChange={handleNewText}
                placeholder="Adicione uma nova tarefa"
                type="text"
            />
            <button disabled={isInputTextEmpty}>Criar <PlusCircle size={16} /></button>
        </form>
    )
}