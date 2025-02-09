import React from 'react';
import { Link } from 'react-router-dom';
import { trimString } from '../../utils';


const ServiceCard = ({ serviceStyle,items}) => {


    return (
		<>
				<div className='col-lg-4 col-md-6 '  >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={items.imageCover} alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={`/service/${items._id}`}>{items.name}</Link>
							</h5>
							{
								trimString(items.description)
							}

							<Link to={`/service/${items._id}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			
		</>
    )
}

export default ServiceCard;