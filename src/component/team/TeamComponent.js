import React from 'react';
import { UseGetAllEmployees } from '../../Hooks/Employees-Hooks/UseGetAllEmployees';
import { useTranslation } from 'react-i18next';


const TeamComponent = () => {
        const { t } = useTranslation();
    

    const [team] =UseGetAllEmployees();
    


    return (
        <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
            <div className="section-heading heading-light">
            <span className="subtitle">{t('Team:ourteam.subtitle')}</span>
            <h2 className="title mb--50">{t('Team:ourteam.tittle')}</h2>
            <p>{t('Team:ourteam.p')}.</p>
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