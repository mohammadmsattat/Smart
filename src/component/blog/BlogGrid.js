import React, { useState } from "react";
import {  Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { UseGetAllBlogs } from "../../Hooks/Blogs-Hooks/UseGetAllBlogs";
import blogAuther from '../../images/public/blogAuther.png'

const BlogGrid = () => {
  const { blogs, HndelPage } = UseGetAllBlogs(1);
  

  return (
    <>
      {blogs.data
        ? blogs.data.map((item) => (
            <div className="blog-grid" key={item._id}>
              <h3 className="title">
                <Link to={item._id}></Link>
              </h3>
              <div className="author">
                <div className="author-thumb">
                  <img
                    src={item.imageCover}
                    alt="Blog Author"
                  />
                </div>
                <div className="info">
                <div className="post-thumbnail">
                <Link to={item._id}>
                  <img
                    src={blogAuther}
                    alt="Blog"
                    style={{width:'3em'}}
                  />
                </Link>
              </div>
              <div className="data">
              <h6 className="author-name">
                    <Link to={"/aboutUs"}>{item.publisher}</Link>
                  </h6>
                  <ul className="blog-meta list-unstyled">
                    <li>{item.updatedAt}</li>
                    <li>25253</li>
                  </ul>
                </div>
              </div>
              </div>
                  
             
              <p>{item.text_en}</p>
              <Link
                className="axil-btn btn-borderd btn-large"
                to={`/blog-details/${item._id}`}
              >
                Read More
              </Link>
            </div>
          ))
        : null}

      <ReactPaginate
        previousLabel={<FaArrowLeft />}
        nextLabel={<FaArrowRight />}
        pageCount={
          blogs.paginationResult ? blogs.paginationResult.numberOfPages : 0
        }
        onPageChange={HndelPage}
        containerClassName={"pagination justify-content-start"}
        previousLinkClassName={"prev"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"current"}
      />
    </>
  );
};

export default BlogGrid;
