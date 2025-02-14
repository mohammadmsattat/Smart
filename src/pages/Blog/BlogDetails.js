import React from "react";
import BlogAuthor from "../../images/public/blogAuther.png";
import blogdetails from "../../images/public/blogdetails.png";

import ContactUsSectoin from "../../component/Contact/ContactUsSection";
import BlogSidebar from "../../component/blog/BlogSidebar";
import DiscipWithBack from "../../component/descripSection/DiscipWithBack";
import { useParams } from "react-router-dom";
import { UseGetOneBlog } from "../../Hooks/Blogs-Hooks/UseGetOneBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog] = UseGetOneBlog(id);
  console.log(blog);

  return (
    <>
      <main className="main-wrapper">
        <DiscipWithBack title={"Blog Details"} page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      <img src={blog.imageCover} alt="Blog photo" />
                    </div>
                    <div className="author-datails" style={{    display: 'flex',
                                                          flexDirection: 'row',
                                                          marginBottom:'2em'}}  >
                      <div className="author-thumb" style={{ width: "4em" }}>
                        <img
                          src={BlogAuthor}
                          alt="Blog Author"
                          style={{ borderRadius: "5em" }}
                        />
                      </div>
                      <div className="info" style={{marginLeft:'1.5em'}}>
                        <h6 className="author-name" style={{marginBottom:'.5em'}}>{blog.publisher}</h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{blog.updatedAt}</li>
                          <li>two min</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                     {blog.text_en}
                      </p>
                    </div>
                  </div>
                </div>

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
  );
};

export default BlogDetails;
