import React from 'react';
import { UseGetAllTeam } from '../../Hooks/TeamHooks';


const TeamComponent = () => {

    const [team] =UseGetAllTeam();
    


    return (
        <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
            <div className="section-heading heading-light">
            <span className="subtitle">Our Team</span>
            <h2 className="title mb--50">Meet The Team</h2>
            <p>Nulla facilisi. Nullam in magna id dolor 
                blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
            </div>
            <div className="row">
                {team.map((item) => (
                    <div className="col-xl-3 col-sm-6" key={item._id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <p>
                                    <img src={item.imageCover} alt={item.name} />
                                </p>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                        {item.name}
                                </h4>
                                <span className="designation" >{item.job}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
            <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
        </ul>
    </div>

    )
}

export default TeamComponent;