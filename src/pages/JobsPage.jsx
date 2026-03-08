import React from 'react'
import JobListings from "../components/JobListings"

const JobsPage = () => {
  return (
    <section className='px-4 py-6 bg-indigo-50'>
      <JobListings style="bg-indigo-50" isHome={false}/>
    </section>
    
  )
}

export default JobsPage