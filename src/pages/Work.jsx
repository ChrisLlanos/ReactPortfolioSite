import LinkData from '../utils/LinkData';


const Work = () => {
    return (
        <div className="flex-column justify-space-between my-4">
                {LinkData.map((project) => (
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light">
                            {project.name} <br />
                                <a href={project.link} className='text-white' style={{ fontSize: '1rem' }}>click here to go to project</a>
                                <br />
                                <img src={project.linkToImage} height="100" width="150"></img>
                                <br />
                        </h4>
                    </div>
                ))}
            </div>
    );
};

export default Work;