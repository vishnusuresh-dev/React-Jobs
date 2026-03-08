import { useState, useEffect } from "react";
import Job from "./Job"
import Spinner from "./Spinner";

const JobListings = ({style, isHome}) => {
  const [jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async ()=>{
      try{
      const res = await fetch("http://localhost:5000/jobs");
      const data = await res.json()
      setJobs(data)
      }
      catch(error){
        console.log("Something Went Wrong", error);
      }
      finally{
        setLoading(false)
      }
    }

    fetchJobs();
  },[])

  
  const list = isHome ? jobs.slice(0,3) : jobs

  return (
    <section className={`${style} px-4 py-10`}>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? ( <Spinner /> ):( <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((job)=>(
            <Job key = {job.id} job = {job}/>
        ))}
        </div>
        )}
        
      </div>
    </section>

  )
}

export default JobListings