import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddItem from './AddItem'
import './DragItem.css'

const Drag = () => {

  const usersData = [
    { id: 1, name: 'VUEJS', username: 'jahid' },
    { id: 2, name: 'REACTJS', username: 'khan' },
    { id: 3, name: 'NODEJS', username: 'tuhin' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    
        <div className="container">
          <h1>TODO App</h1>
          <div className="todo-item">
            <h2>Add user</h2>
            <AddItem addUser={addUser} />
            <h3>Added Items</h3>
            <ReactSortable list={users} setList={setUsers}>
                {users.map((user, index) => (
                    <ul>
                        <li key={user.id}>
                              <strong> {index}. </strong>  {user.name} ({user.username}) - [{user.id}]
                              <span>
                                  <FontAwesomeIcon className="faicons" onClick={() => {
                                      deleteUser(user.id)
                                  }} icon="trash" />
                              </span>
                        </li>
                    </ul>
                ))}
            </ReactSortable>
          </div>
        </div>
  )
}

export default Drag