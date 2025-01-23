import React from 'react';
import './App.css';
import './components/Header.js'

const users = [
    { name: "Leslie Maya", email: "leslie@gmail.com", location: "Los Angeles,CA", joined: "October 2, 2010", permission: "Admin", avatar: "https://placehold.co/32x32" },
    { name: "Josie Deck", email: "josie@gmail.com", location: "Cheyenne,WY", joined: "October 3, 2011", permission: "Admin", avatar: "https://placehold.co/32x32" },
    { name: "Alex Pfeiffer", email: "alex@gmail.com", location: "Cheyenne,WY", joined: "May 20, 2015", permission: "Admin", avatar: "https://placehold.co/32x32" },
    { name: "Mike Dean", email: "mike@gmail.com", location: "Syracuse,NY", joined: "July 14, 2015", permission: "Contributor", avatar: "https://placehold.co/32x32" },
    { name: "Mateus Cunha", email: "cunha@gmail.com", location: "Luanda,AN", joined: "October, 2016", permission: "Contributor", avatar: "https://placehold.co/32x32" },
    { name: "Nzola Uemo", email: "nzola@gmail.com", location: "Lagos,NG", joined: "June 5, 2016", permission: "Viewer", avatar: "https://placehold.co/32x32" },
    { name: "Antony Mack", email: "mack@gmail.com", location: "London,ENG", joined: "June 15, 2015", permission: "Contributor", avatar: "https://placehold.co/32x32" },
    { name: "André da Silva", email: "andré@gmail.com", location: "São Paulo,BR", joined: "March 13, 2018", permission: "Contributor", avatar: "https://placehold.co/32x32" },
    { name: "Jorge Ferreira", email: "jorge@gmail.com", location: "Huambo,Angola", joined: "March 14, 2018", permission: "Contributor", avatar: "https://placehold.co/32x32" },
];

function App() {
    return (
        <div className='full-screen'>
            <h1 className='title'>User Management</h1>
            <div className='row-2'>
                <input type='text' placeholder='Search items...' className='search-field' />
                <select className='permission-select'>
                    <option>Permission: All</option>
                    <option>Permission: Admin</option>
                    <option>Permission: Customer</option>
                    <option>Permission: Staff</option>
                    <option>Permission: Manager</option>
                </select>

                <select className='joined-select'>
                    <option>Joined: 2020</option>
                    <option>Joined: 2021</option>
                    <option>Joined: 2022</option>
                    <option>Joined: 2023</option>
                    <option>Joined: 2024</option>
                </select>

                <button className='export-button'>Export</button>
                <button className="new-button">+ New User</button>
            </div>

            <table className='management-table'>
                <thead className='table-header'>
                    <tr>
                        <th className='item'>Full Name</th>
                        <th className='item'>Email Address</th>
                        <th className='item'>Location</th>
                        <th className='item'>Joined</th>
                        <th className='item'>Permission</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="table-row">
                            <td className="p-2">
                                <img src={user.avatar} alt={`Avatar of ${user.name}`} className="w-8 h-8 rounded-full mr-2" />
                                {user.name}
                            </td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.location}</td>
                            <td className="p-2">{user.joined}</td>
                            <td className="p-2">
                                {user.permission === "Admin" && <span className="badge-admin">{user.permission}</span>}
                                {user.permission === "Contributor" && <span className="badge-contributor">{user.permission}</span>}
                                {user.permission === "Viewer" && <span className="badge-viewer">{user.permission}</span>}
                            </td>
                            <td className="p-2"><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default App;
