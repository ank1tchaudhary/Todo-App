import { useEffect, useState } from "react";
import EmployeeRow from "./EmployeeRow";

function Employee() {
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const result = await response.json();
                console.log('users : ', result.users);
                setLoading(false);
                setEmployee(result);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container">
            <div className='card'>
                <div className='card-header'>
                    Employee List
                </div>
                <div className='card-body'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Age</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Image</th>
                                <th scope='col'>BloodGroup</th>
                                <th scope='col'>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.users.map(emp => <EmployeeRow key={emp.id} data={emp} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Employee;