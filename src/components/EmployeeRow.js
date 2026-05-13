function EmployeeRow({ data }) {
    return (
        <tr>
            <th scope="row">{data.id}</th>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td><img src={data.image} alt={data.id}></img></td>
            <td>{data.bloodGroup}</td>
            <td>{`${data.address.address}, ${data.address.city}, ${data.address.state} (${data.address.stateCode}) ${data.address.postalCode}, ${data.address.country}`}</td>
        </tr>
    );
}

export default EmployeeRow;