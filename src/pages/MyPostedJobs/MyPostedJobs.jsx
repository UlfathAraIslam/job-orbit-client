import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './Joblists';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h3>My Posted Jobs:</h3>
            <Suspense>
                <JobLists
                 jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
                ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;