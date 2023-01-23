import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./TodoForm.module.css"

interface TodoFormProps {
    onCreateTodo: (text: string) => void;
}

export function TodoForm({ onCreateTodo }: TodoFormProps) {
    const [text, setText] = useState('');

    function handleNewText(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setText(event.target.value);

    }

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        onCreateTodo(text);
        setText('');
    }

    function handleInputWithError(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.form}>
            <input
                required
                onChange={handleNewText}
                onInvalid={handleInputWithError}
                placeholder="Adicione uma nova tarefa"
                type="text"
            />
            <button>Criar <PlusCircle size={16} /></button>
        </form>
    )
}