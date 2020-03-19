import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse.
          </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div className="">Posted by Huzaifah</div>
          <div className="">17th March, 9pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
