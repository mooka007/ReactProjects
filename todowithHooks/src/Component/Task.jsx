
import TaskChild from './TaskChild.jsx';
import React, { useState } from 'react';

function Task() {
    const [text, settext] = useState('')
  const [tasks, settasks] = useState(['aptah','atah', 'akhah']) 

  function sowa(a){
    settext(a.target.value)
  }

  function add() {
    settasks([...tasks, text])
  }
  function remove(i) {
    const newState = tasks.filter((task, index) => index!=i)
    settasks(newState)
  }


  return (
    <div className='container mt-5'>
        <div className='form-group col-'>
            <input type="text" onChange={sowa} className='form-control'/>
            <button onClick={add} className='form-control mt-2 btn btn-success'>add</button>
        </div>

      <ul className='list-group'>
      {
        tasks.map((task, index) => (
          <>
          <TaskChild data={task}/>
            <button onClick={()=>remove(index)} className='btn btn-secondary mt-2'>delete</button>
          </>
        ))
      }
      </ul>


    </div>
  );
}

export default Task;
