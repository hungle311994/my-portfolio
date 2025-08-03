const ProjectItem = ({ project }) => {
  return (
    <div className="item">
      <div className="img-wrap">
        <img
          src={require(`../../assets/${project.image}`)}
          alt={project.title}
        />
      </div>

      <div className="content">
        <span>{project.title}</span>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="btn">
          <a href={project.previewUrl} target="_blank" rel="noreferrer">
            <span>Preview</span>
            <span className="icon">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <span>View GitHub</span>
            <span className="icon">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
