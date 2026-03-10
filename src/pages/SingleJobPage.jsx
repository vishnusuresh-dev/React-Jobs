import {useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import SingleJob from '../components/SingleJob';

const JobPage = () => {
  const [ loading, setLoading ] = useState(true);
  const [viewJob, setViewJob] = useState([]);
  const { id } = useParams();
  
  useEffect(()=>{
    const fetchJob = async () =>{
      try{
      const res = await fetch(`http://localhost:5000/jobs/${id}`);
      const data = await res.json();
      setViewJob(data);
    }
    catch(err){
      window.alert("Something went wrong", err);
    }
    finally{
      setLoading(false);
    }
    }

    fetchJob();
  },[])

  const deleteSingleJob = async (jobId) => {
    
    const res = await fetch(`http://localhost:5000/jobs/${jobId}`,{
      method : 'DELETE'
    })
    return;
  }

  return(
    loading ? <Spinner /> : <SingleJob deleteJobFn={deleteSingleJob} job={ viewJob }/>
  )
}

export default JobPage;