import React from 'react';
import BlogAuthor  from '../../images/public/blogAuther.png';
import blogdetails from '../../images/public/blogdetails.png'


import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import BlogSidebar from '../../component/blog/BlogSidebar';
import DiscipWithBack from '../../component/descripSection/DiscipWithBack';






const BlogDetails = () => {

 

    return (
        <>
            <main className="main-wrapper">
                <DiscipWithBack 
                title={'Blog Details'}
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                        <div className="row row-40">
                            <div className="col-lg-8">
                                <div className="single-blog">
                                    <div className="single-blog-content blog-grid">
                                        <div className="post-thumbnail" >
                                           <img src={blogdetails} alt="Blog photo"/>
                                           
                                        </div>
                                        <div className="author">
                                            <div className="author-thumb" style={{width:'4em'}}>
                                                <img src={BlogAuthor} alt="Blog Author" style={{borderRadius:'5em'}} />
                                            </div>
                                            <div className="info">
                                                <h6 className="author-name">Ahmad</h6>
                                                <ul className="blog-meta list-unstyled">
                                                    <li>Apr 12,2020</li>
                                                    <li>two min</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                            Want to know the one thing that every successful digital marketer does 
                                            first to ensure they get the biggest return on their marketing budget?<br/><br/><br/>
                                            Want to know the one thing that every successful digital marketer does 
                                            first to ensure they get the biggest return on their marketing budget?                                            Want to know the one thing that every successful digital marketer does 
                                            first to ensure they get the biggest return on their marketing budget?
                                            </p>
                                        </div>
                                       

                                    </div>
                                </div>
                                {/* <BlogAuthor data={detailsBlog} /> */}
                                {/* <Comment /> */}

                            </div>
                            
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="section section-padding-equal pt-0 related-blog-area">
                    <div className="container">
                        <div className="section-heading heading-left">
                            <h3 className="title">Related Post</h3>
                        </div>
                        <div className="row g-0">
                            <BlogListOne colSize="col-xl-6" itemShow="2" />
                        </div>
                    </div>
                </div> */}
                <ContactUsSectoin />
            </main>
        </>
    )
}

export default BlogDetails;