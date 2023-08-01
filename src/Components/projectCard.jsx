const ProjectCard = (props) => {
  return (
    <div className="projectContainer">
      <p className="title">{props.title}</p>
      <p className="about">{props.about}</p>
    </div>
  );
};

export default ProjectCard;
