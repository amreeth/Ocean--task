import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";


const Users = () => {

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/user");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phonenumber}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
