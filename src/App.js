import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import taskReducer from './components/taskReducer';

const  App = () =>  {

  const [value, setValue] = useState('')
  
  const [state, dispatch] = useReducer(taskReducer, { 
    tasks: [],
   });


  const addTask = () => {
    console.log(value, 'voir la valeur')

    dispatch({
      type:'ADD_TASK',
      payload: value
    })

  }

  const deleteTask = (id_task) => {
    console.log(id_task)
    dispatch({
      type :'DELETE_TASK',
      payload: id_task
    })

  }

  useEffect(() => {
    console.log(state.tasks, 'voir les informat', state.tasks.length)
  })
  return (
    <>

    <h3>Liste des taches</h3>

      
          
          <div className='row mt-4 mb-4'>
              <div className='col-lg-5'>
                <ul class="list-group">
                {

                state.tasks.map((favoris, index) => (
                  <li class="list-group-item">{favoris} <button  onClick={()=>deleteTask(index) } className="btn btn-danger">delete</button></li>
              ))
                   }
                </ul>
              </div>
            </div>
       
     
          <div className="container">
            <div className="row">
              <div class="col-3">
                <input type="text"  onChange={e=> setValue(e.target.value)} value={value} className="form-control"/>
              </div>
              <div class="col-6">
                <button className='btn btn-primary' onClick={addTask}>add</button>
              </div>
            </div>
            </div>
    </>
  );
}

export default App;
