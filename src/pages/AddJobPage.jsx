import React from 'react'
import AddJobs from '../components/AddJobs'
const AddJobPage = () => {

  const addJobFn = (newJob) =>{
    console.log(newJob);
  }

  return (
    <AddJobs addJobSumbit={addJobFn}/>
  )
}

export default AddJobPage
  