import React, { useEffect, useState } from 'react';
import JobCard from './Shared/JobCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading hot jobs...</div>;

  return (
    <div>
        <h2 className='text-4xl text-center p-12'>Hot Jobs Of The day</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;
