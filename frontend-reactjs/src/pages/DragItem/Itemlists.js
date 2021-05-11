import React from 'react'
// import { ReactSortable } from "react-sortablejs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ItemLists.css'

const ItemLists = (props) => {
  // const userData = props.users
  // const [users, setUsers] = useState(userData)

  return (
    <section>
      <div>
      {props.users.map((user, index) => (
                      <ul>
                          <li key={user.id}>
                                <strong> {index}. </strong>  {user.name} ({user.username}) - [{user.id}]
                                <span>
                                    <FontAwesomeIcon className="faicons" onClick={() => {
                                        props.deleteUser(user.id)
                                    }} icon="trash" />
                                </span>
                          </li>
                      </ul>
                  ))}
      </div>
      {/* <div className="todo-item">
        <h3>Added Items</h3>
        <ReactSortable list={users} setList={setUsers}>
                  {users.map((user, index) => (
                      <ul>
                          <li key={user.id}>
                                <strong> {index}. </strong>  {user.name} ({user.username}) - [{user.id}]
                                <span>
                                    <FontAwesomeIcon className="faicons" onClick={() => {
                                        props.deleteUser(user.id)
                                    }} icon="trash" />
                                </span>
                          </li>
                      </ul>
                  ))}
          </ReactSortable>
      </div> */}
  </section>
  )

  
  
}

export default ItemLists