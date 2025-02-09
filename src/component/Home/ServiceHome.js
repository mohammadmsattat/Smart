import React from 'react';
import { Link } from 'react-router-dom';


import { UseGetAllServices } from '../../Hooks/ServicesHooks';



const ServiceHome = () => {

	const [Services]=UseGetAllServices()
	

    return (
		<>
			{
				Services.slice(0, 6).map((item, index) => (
				<div className='col-xl-4 col-md-6 ' key={index} >
					<div className='services-grid '>

						<div className="thumbnail">
							<img src={item.imageCover} alt="icon" />
						</div>

						<div className="content">

							<h5 className="title"> 
								<Link to={`/service/${item._id}`}>{item.name}</Link>
							</h5>

							<p>{item.description}</p>

							<Link to={`/service/${item._id}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
				))
			}
		</>
    )
}

export default ServiceHome;