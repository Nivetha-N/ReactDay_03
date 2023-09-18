import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {

  const [todoList, setTodoList] = useState([{
    name: 'Office task-1',
    desc: 'This is my first todo desc',
    status: 'completed'
  },
  {
    name: 'Office task-2',
    desc: 'This is my second todo desc',
    status: 'Not completed'
  }, {
    name: 'Office task-3',
    desc: 'This is my third todo desc',
    status: 'Not completed'
  }
  ])

  const [inputs, setInputs] = useState({
    name: "",
    desc: "",
    status: 'Not completed'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((prev) => {
      return [...prev, inputs];
    })
    setInputs({
      name: "",
      desc: "",
      status: 'Not completed'
    })
  }

  return (
    <>
      <div><h3>My TODO</h3></div>
      <form onSubmit={handleSubmit} className='todo-form'>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          placeholder='Todo Name'
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          value={inputs.desc || ""}
          placeholder='Todo Description'
          onChange={handleChange}
        />
        <input type="submit" value="Add ToDo" />
      </form>
      <br />
      <br />
      <div className='flex todo'>
        {
          todoList.map((item, index) => {
            return (
              <>
                <div className='mainDiv'key={index}>
                  <Todo name={item.name} desc={item.desc} status={item.status} list={todoList} setList={setTodoList} index={index}/>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}


export default App
