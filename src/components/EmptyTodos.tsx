import { ClipboardText } from "phosphor-react";

import styles from './EmptyTodos.module.css';

export function EmptyTodos() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <div className={styles.emptyText}>
        <p> Você ainda não tem tarefas cadastradas </p>
        <p> Crie tarefas e organize seus itens a fazer </p>
      </div>
    </div>
  );
}