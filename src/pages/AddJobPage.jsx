import React from 'react'
import AddJobs from '../components/AddJobs'
const AddJobPage = () => {

  const addJobFn = async (newJob) =>{
    const res = await fetch("http://localhost:5000/jobs",{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newJob)
    });

    res ? window.alert("Job Added Successully") : window.alert("Something Went Wrong");
    
    return;
  }

  return (
    <AddJobs addJobSumbit={addJobFn}/>
  )
}

export default AddJobPage
  