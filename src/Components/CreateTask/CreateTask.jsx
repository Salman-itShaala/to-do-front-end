import React from 'react'
import "./CreateTask.css"

function CreateTask() {
  return (
    <div className='createTaskContainer'>
        <form action=""  className="createTaskForm">
          <h2>Create Task</h2>
          <label htmlFor="title">Title</label>
          <input type="text"name='title' id='title' placeholder='e.g. Attend Meetting. ' /><br></br>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name='desc' id='desc' placeholder='e.g.  Meetting with marketing team ' /><br></br>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" /><br></br>
          <div className="checkInputs">
            <div className="checkInputOne">
                <label htmlFor="completed">Completed</label>
                <input type="checkbox" name='complete'/>
            </div>
            <div className="checkInputTwo">
                <label htmlFor="important">Important</label>
                <input type="checkbox" name='important'/>
            </div>
          </div><br></br>
          <button type='submit'>+ Create Task</button>
        </form>

    </div>
  )
}

export default CreateTask
