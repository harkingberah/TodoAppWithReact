import React, { useState } from "react";

function TodoItem(props){
    return (
        <div onClick={() => {
            props.onChecked(this.props.id);
        }}>
            <li>{props.text}</li>
      </div>
    );
}



export default TodoItem;