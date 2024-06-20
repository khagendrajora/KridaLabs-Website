import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, url }) => {
  const handleCardClick = () => {
    window.location.href = url;
  };

  return (
    <div style={styles.card} title={description} onClick={handleCardClick}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.overlay}>
          <h3 style={styles.title}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '16px',
    width: '300px',
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    borderRadius: '8px 8px 0 0',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(10, 20, 50, 0.4)',
    borderRadius: '8px 8px 0 0',
    boxSizing: 'border-box',
    padding: '16px',
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    textAlign: 'center',
  },
  description: {
    fontSize: '0.9em',
    color: '#ddd',
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '16px',
  },
};

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const projects: Project[] = [
  {
    title: 'Knits & Stitches',
    description: 'A B2B ecommerce site for a local wool house in Nepal.',
    imageUrl: '/k&s.jpeg',
    url: 'https://knitsandstitches.com/',
  },
  {
    title: 'Quick Time Valero',
    description: 'Advancing the Future of Energy Through the Years ',
    imageUrl: '/qtv.jpeg',
    url: 'http://quicktimevalero.com/',
  },
  {
    title: 'NDRRMA VMS',
    description: 'A comprehensive Volunteer Management System designed for the NDRRMA, Government of Nepal, to efficiently coordinate and mobilize volunteers during disaster response. Streamlines volunteer registration, deployment, and activity tracking to enhance emergency management efforts.',
    imageUrl: '/public/vms.jpeg',
    url: 'https://vms.ndrrma.gov.np/',
  },
 
 
];

const ProjectsList: React.FC = () => {
  return (
    <div style={styles.container}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default ProjectsList;