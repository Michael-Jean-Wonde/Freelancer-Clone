import React from 'react';
import './videoBanner.css';
import { Link } from 'react-router-dom';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info">
                <h1>Hire the best freelancers for any job, online.</h1>
                <h4>
                    Millions of people use freelancer.com to turn their ideas into reality.
                </h4>
                <button className="videoBanner__info--first">
                    <Link to='/proffessionalsList'>Hire a Freelancer</Link>
                </button>
                <button className="videoBanner__info--second">
                    Earn Money Freelancing
                </button>
            </div>

        </div>
    )
}

export default VideoBanner
