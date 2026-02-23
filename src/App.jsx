import "./index.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewaAllJobs";


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />


    </>
  );
};

export default App