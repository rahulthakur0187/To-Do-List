import { useState } from 'react'
import './App.css'
import React from 'react'
const App  = () => {
  const[title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [maincontainer, setmaincontainer] = useState([]) // in this we add task in the form of array

  // if you click on add task button then it will store the data as well reset the input 
  const submitHandler = (e)=>{
    e.preventDefault()
    settitle("")
    setdescription("")
    setmaincontainer([...maincontainer,{ title, description}])
  }


//  this function is created to delete the task
  const deleteHandler = (index)=>{
    let copyTask = [...maincontainer]
    copyTask.splice(index,1)
    setmaincontainer(copyTask)
    
  }

let renderTask = <h2>No task available</h2>

//  in this function you will get the value of already added task,
if(maincontainer.length>0){
  renderTask = maincontainer.map((task, index)=>{
    return(
      <div key={index}>
        <div className='flex justify-around mb-5 w-2/3'>
        <h5 className='font-3xl font-semibold'>{task.title}</h5>
        <h5 className='font- xlfont-semibold'>{task.description}</h5>
      </div>
      <button onClick={()=>{deleteHandler(index)}} className='bg-red-600  text-white px-4 py-3 rounded-3xl flex  justify-end ml-auto'>Delete</button>
      
        </div>
    )
  }) 
}
  // this is the main user interface page 
return (
    <>
    <h1 className='bg-blue-900 text-white font-bold text-5xl text-center py-3 '>To-Do-List</h1>
    <form  onSubmit={submitHandler}>
      <div>
      <input text="" placeholder='Enter your title' className='m-10 py-1 text-2xl outline'
      value={title}
      onChange={(e)=>{
      settitle(e.target.value) // two way binding means we telling react and as well  to user that what we are typing here
      }} 
      />
      <input text="" placeholder='Enter your description' className='my-8 py-1 text-2xl outline '
      value={description}
      onChange={(e)=>{
        setdescription(e.target.value)
      }}
       />
      <button className='bg-blue-900 text-white p-3 rounded-md text-xl m-6'> Add tesk </button>
      </div>
  
    </form>


    <div className='bg-slate-300 p-3'>
      <ul>
        {renderTask}
      </ul>

    </div>
  
    </>
  
  )

}

export default App


