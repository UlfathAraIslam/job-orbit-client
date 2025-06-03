import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h3 className="text-4xl">Jobs applied so far {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((application,index) => <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
                />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
