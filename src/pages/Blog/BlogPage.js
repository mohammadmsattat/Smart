import React from 'react';
import DiscipWithBack from '../../component/descripSection/DiscipWithBack';
import BlogSidebar from '../../component/blog/BlogSidebar';
import BlogGrid from '../../component/blog/BlogGrid';
import SEO from '../../component/SEO';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';


const BlogPage = () => {

    return (
        <>
            <SEO title="Blog Grid" />
            <main className="main-wrapper">
                <DiscipWithBack 
                title="Blogs"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-8">
                                <BlogGrid />
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                       </div>
                    </div>
                </div>
                <ContactUsSectoin />
            </main>
        </>
    )
}

export default BlogPage;