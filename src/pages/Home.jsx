import { Link } from 'react-router-dom';


const Home = () => {

    return (
       <main>
            <div className="flex-column justify-space-between my-4">
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light">
                            Hi! my name is Chris <br />
                            <span className='text-white' style={{ fontSize: '1rem' }}>
                                I am currently learning about fullstack development. This website was made with react and other technologies I have been learning. I hope you will follow me in this journey and reach out if you'd like to discuss more!
                                <br />
                                <Link className='btn btn-lg btn primary m-2' to="/work">
                                    Learn more about my work
                                </Link>
                            </span>

                        </h4>
                    </div>
            </div>
        </main>
    );
}

export default Home;