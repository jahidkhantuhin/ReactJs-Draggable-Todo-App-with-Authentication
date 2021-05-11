import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import './Item.css'

const listItems = (props) => {
    const items = props.items;
    const listItems = items.map((item, index) =>
   {
       return <div>
        <ul className="list">
            <li className="list-item" key={index}>
                <strong> {index}. </strong>
                {item.name} - [<strong> {item.id} </strong>]
                <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.id)
                    }} icon="trash" />
                </span>
            </li>
        </ul>
    </div>})

    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default listItems;