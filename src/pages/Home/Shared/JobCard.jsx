import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({job}) => {
    const {title,location,description,requirements,company, company_logo, salaryRange,_id} = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-3">
        <figure>
        <img
          src={company_logo}
          className="w-12"
        />
      </figure>
      <div>
        <h3 className="text-4xl">{company}</h3>
        <p className="text-sm flex gap-3 items-center"><FaMapMarkerAlt />{location}</p>
      </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Salary:{salaryRange.min} - {salaryRange.max}</p>
        <p>
          {description}
        </p>
        <div className="card-actions">
          {
            requirements.map((skill,index) => <div
            key={index}
            className="badge badge-outline">{skill}</div>)
          }
        </div>
        <div className="card-actions justify-end">
      <Link to={`/jobs/${_id}`} className="btn btn-primary">Show details</Link>
    </div>
      </div>
    </div>
  );
};

export default JobCard;
