import React, { useState } from 'react'

import './AddItem.css'

const AddTodoItem = (props) => {
  
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <section className={"add-item"}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (!user.name || !user.username) return

            props.addUser(user)
            setUser(initialFormState)
          }}
        >
          <label>Name</label>
          <input
              type="text"
              name="name"
              value={user.name}
              placeholder={'Your Name'}
              onChange={handleInputChange}
          />
          <label>Username</label>
          <input
              type="text"
              name="username"
              value={user.username}
              placeholder={'User Name'}
              onChange={handleInputChange}
          />
          <button>Add new user</button>
        </form>
    </section>
    
  )
}

export default AddTodoItem