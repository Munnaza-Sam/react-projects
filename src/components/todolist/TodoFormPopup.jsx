import React , {useEffect} from 'react';
import { useForm } from 'react-hook-form';

const TodoFormPopup = ({ onClose, onSubmitTodo, editingTodo  }) => {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (editingTodo) {
            reset({ title: editingTodo.title, description: editingTodo.description });
        } else {
            reset({ title: '', description: '' }); // Reset to empty if new entry
        }
    }, [editingTodo, reset]);

    const onSubmit = (data) => {
        onSubmitTodo(data);
        reset();
        onClose();
    };

    return (
        <div style={overlayStyles}>
            <div style={modalStyles}>
            <h2>{editingTodo ? 'Edit Todo' : 'Add Todo'}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Title: </label>
                        <input
                            type="text"
                            {...register('title', { required: true })}
                            style={inputStyles}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Description: </label>
                        <textarea
                            {...register('description')}
                            style={{ ...inputStyles, height: '80px' }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button type="button" onClick={onClose} style={buttonStyles}>
                            Cancel
                        </button>
                        <button type="submit" style={{ ...buttonStyles, marginLeft: '10px' }}>
                        {editingTodo ? 'Update' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
};

const inputStyles = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyles = {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3f3f3f',
    color: '#fff',
    cursor: 'pointer',
};

export default TodoFormPopup;
