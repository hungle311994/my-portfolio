import "./Project.css";
import ProjectItem from "./ProjectItem";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "The Movies Web",
      image: "images/web-the-movies.png",
      features: [
        "Trending movies and tv series",
        "Search movies and tv series",
        "Technology used: ReactJS, Redux",
      ],
      previewUrl: "https://themovies-review.netlify.app/",
      githubUrl: "https://github.com/hungle311994/movies",
    },
    {
      id: 2,
      title: "The Movies App",
      image: "images/mobile-the-movies.png",
      features: [
        "Mobile app review details of Movies and TV Shows",
        "Technology used: Flutter",
      ],
      previewUrl:
        "https://drive.google.com/file/d/12YV0ck8XrEVk3XHe5lMnx4klK2R24h1N/view",
      githubUrl: "https://github.com/hungle311994/flutter_the_movies_a",
    },
    {
      id: 3,
      title: "Transactions App",
      image: "images/app-transaction.png",
      features: [
        "Mobile app performs transactions",
        "Technology used: React Native, Express JS",
      ],
      previewUrl:
        "https://drive.google.com/file/d/11XDXvWu19xgRydO4IZNm4ClGM0FjZpNz/view",
      githubUrl: "https://github.com/hungle311994/react-native-demo-app",
    },
  ];

  return (
    <div className="projects" name="/projects">
      {/* Title */}
      <div className="title">
        <h2>Projects</h2>
        <span>Check out of my projects.</span>
      </div>

      {/* Project Items */}
      <div className="items">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
