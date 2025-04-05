import React from 'react'
import styles from './Todo.module.css'
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";

const TodoList = ({data, setIsPopupOpen, setEditingTodo, handleDelete }) => {
    const handleEdit = () => {
        setEditingTodo(data);
        setIsPopupOpen(true);
    };
    return (
        <div className={styles.todolist}>
            <p>
                <b>{data.title} </b>
                <small> {data.description}</small>
            </p>
            <span>
                <CiEdit  onClick={handleEdit}/>
                <MdDeleteSweep   onClick={() => handleDelete(data.id)} style={{ color: "red" }} />
            </span>
        </div>
    )
}

export default TodoList