import React, { useEffect, useState } from "react";

function NewTodoForm({ addOrUpdateTodo, todoToEdit }) {
    const [desc, setDesc] = useState('');
    const [assigned, setAssigned] = useState('');
    const [seq, setSeq] = useState(null);

    useEffect(() => {
        if (todoToEdit) {
            setDesc(todoToEdit.desc);
            setAssigned(todoToEdit.assigned);
            setSeq(todoToEdit.seq);
        } else {
            setDesc('');
            setAssigned('');
            setSeq(null);
        }
    }, [todoToEdit]);

    const submitTodos = () => {
        if (desc !== '' && assigned !== '') {
            console.log(seq);
            addOrUpdateTodo(seq, desc, assigned);
            setDesc('');
            setAssigned('');
            setSeq(null);
        }
    };
    return <>
        <div className="mt-5 container">
            <div>{seq ? "Edit Todo" : "Todo Form"}</div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned :</label>
                    <input type="text" className="form-control" required onChange={e => setAssigned(e.target.value)} value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description :</label>
                    <textarea rows={3} className="form-control" required onChange={e => setDesc(e.target.value)} value={desc}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodos}>{seq ? "Update Todo" : "Add Todo"}</button>
            </form>
        </div>
    </>;
}

export default NewTodoForm;