import React, { useState } from "react";

function TodoItem(props){
    return (
        <div>
            <li>{props.text}</li>
      </div>
    );
}



export default TodoItem;