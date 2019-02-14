import React from 'react'

export default ({
    todo,
    index,
    deleteTodo
}) => {
  return (
    <div className="todo">
        <div className="content">
        {
            todo
        }
        </div>
        <button
            onClick={() => {
                deleteTodo(index)
            }}
            className="delete"
            >X</button>
    </div>
  )
}
