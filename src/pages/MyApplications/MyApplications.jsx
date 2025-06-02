import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStats/>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList/>
            </Suspense>
        </div>
    );
};

export default MyApplications;