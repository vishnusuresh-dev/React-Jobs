import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings style="bg-blue-50" isHome={true}/>
    <ViewAllJobs />
    </>
  );
};

export default HomePage;