import React, { useState } from "react";

function TodoItem(props){
    return (
        <div onClick={props.onCheck()}>
            <li>{props.text}</li>
      </div>
    );
}



export default TodoItem;