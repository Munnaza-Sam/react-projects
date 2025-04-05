import React, { useState, useEffect } from 'react'
import styles from './Todo.module.css'
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import TodoFormPopup from './TodoFormPopup';
import TodoList from './TodoList';
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";



const Todo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [todo, setTodo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todo-collection"));
      const todoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodo(todoList);
    };

    fetchTodos();
  }, []);

  const onClose = () => {
    setIsPopupOpen(false);
    setEditingTodo(null);
  }
  const onSubmitTodo = async (data) => {
    if (editingTodo) {
      const todoRef = doc(db, "todo-collection", editingTodo.id);
      await updateDoc(todoRef, { title: data.title, description: data.description });

      setTodo(prevTodos =>
        prevTodos.map(item =>
          item.id === editingTodo.id ? { ...item, ...data } : item
        )
      );
      setFeedbackMessage("Todo updated successfully!");
    } else {
      const docRef = await addDoc(collection(db, "todo-collection"), data);
      setTodo(prevTodos => [...prevTodos, { id: docRef.id, ...data }]);
      setFeedbackMessage("Todo added successfully!");
    }
    setEditingTodo(null);

    setTimeout(() => setFeedbackMessage(""), 3000);
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo-collection", id));
    setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
    setFeedbackMessage("Todo deleted successfully!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };


  const filteredTodos = todo.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {feedbackMessage && <h4 className={styles.message}>{feedbackMessage}</h4>}
      <div className={styles.container}>
        <h2> Todo List </h2>
        <hr />
        <div className={styles.Add_todo}>
          <input type="text" placeholder='Search List'
            onChange={(e) => setSearchTerm(e.target.value)} />
          <FaSearch className={styles.search_icon} />
          <button onClick={() => setIsPopupOpen(true)}><FaPlus /></button>
        </div>
        <div className={styles.parentTodoList}>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((data, index) => (
              <TodoList data={data} key={data.id} setEditingTodo={setEditingTodo} setIsPopupOpen={setIsPopupOpen} handleDelete={handleDelete} />
            ))) : (<p>No matching todos found.</p>)}
        </div>
        {isPopupOpen && (<TodoFormPopup onClose={onClose} onSubmitTodo={onSubmitTodo} editingTodo={editingTodo}
        />)}
      </div >
    </>
  )
}

export default Todo