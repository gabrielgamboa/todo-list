import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Todo.module.css";

interface TodoProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onChangeTodoStatus: (todoId: string) => void;
}

export function Todo({ id, title, isCompleted, onChangeTodoStatus }: TodoProps) {

  return (
    <div className={styles.todo}>
      {isCompleted ?
        <CheckCircle onClick={() => onChangeTodoStatus(id)} className={styles.checkedTodo} size={24} /> :
        <Circle onClick={() => onChangeTodoStatus(id)} className={styles.uncheckedTodo} size={24} />
      }
      <p className={isCompleted ? styles.fadedTitle : styles.normalTitle}>{title}</p>
      <Trash size={24} />
    </div>
  );
}