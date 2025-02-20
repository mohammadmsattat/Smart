import React from "react";
import BlogAuthor from "../../images/public/blogAuther.png";
import ContactUsSectoin from "../../component/Contact/ContactUsSection";
import DiscipWithBack from "../../component/descripSection/DiscipWithBack";
import { useParams } from "react-router-dom";
import { UseGetOneBlog } from "../../Hooks/Blogs-Hooks/UseGetOneBlog";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const [blog, formattedDate] = UseGetOneBlog(id);

  console.log(formattedDate);

  return (
    <>
      <main className="main-wrapper">
        <DiscipWithBack title={t("Blogs:Head.title")} page={t("Blogs:Head.page")} />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      <img src={blog.imageCover} alt="Blog photo" />
                    </div>
                    <div
                      className="author-datails"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "2em",
                      }}
                    >
                      <div className="author-thumb" style={{ width: "4em" }}>
                        <img
                          src={BlogAuthor}
                          alt="Blog Author"
                          style={{ borderRadius: "5em" }}
                        />
                      </div>
                      <div className="info" style={{ marginLeft: "1.5em" ,marginRight:'1.5em'}}>
                        <h6
                          className="author-name"
                          style={{ marginBottom: ".5em" }}
                        >
                          {blog.publisher}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{formattedDate}</li>
                          <li>two min</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        {i18n.language === "en" ? blog.text_en : blog.text_ar}
                      </p>
                    </div>
                  </div>
                </div>
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
