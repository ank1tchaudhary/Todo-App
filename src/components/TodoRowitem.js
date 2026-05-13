function TodoRowitem({ data, onDelete, onUpdate }) {
    const deleteRow = () => {
        onDelete(data.seq);
    };

    const updateRow = () => {
        onUpdate(data.seq);
    };
    return (
        <tr>
            <th scope="row">{data.seq}</th>
            <td>{data.desc}</td>
            <td>{data.assigned}</td>
            <td><button onClick={deleteRow} className="btn btn-secondary">Delete</button></td>
            <td><button onClick={updateRow} className="btn btn-primary">Update</button></td>
        </tr>
    );
}
export default TodoRowitem;