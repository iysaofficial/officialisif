import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ post }) => {
  const isExternal =
    post.Pagelink &&
    (post.Pagelink.startsWith("http://") || post.Pagelink.startsWith("https://"));

  const [imgError, setImgError] = useState(false);

  const getImgSrc = () => {
    if (!post.image) return null;
    if (post.image.startsWith("http://") || post.image.startsWith("https://")) {
      return post.image;
    }
    try {
      return require("../../img/" + post.image);
    } catch (e) {
      return null;
    }
  };

  const imgSrc = getImgSrc();

  const CardLinkWrapper = ({ children }) => {
    if (isExternal) {
      return (
        <a
          href={post.Pagelink}
          target="_blank"
          rel="noopener noreferrer"
          className="news_card_link"
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={post.Pagelink} className="news_card_link">
        {children}
      </Link>
    );
  };

  return (
    <div className="col-lg-4 col-md-6 col-12 news_card_col">
      <div className="news_custom_card">
        <div className="news_card_image_wrapper">
          <CardLinkWrapper>
            {imgSrc && !imgError ? (
              <img
                className="news_card_image"
                src={imgSrc}
                alt={post.btitle || "ISIF News"}
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <i className="ti-image" style={{ fontSize: "32px", marginBottom: "8px", opacity: 0.8 }}></i>
                <span style={{ fontSize: "14px", fontWeight: 600 }}>ISIF {post.Year} News</span>
              </div>
            )}
          </CardLinkWrapper>
          <div className="news_card_badge_date">
            <i className="ti-calendar"></i>
            <span>
              {post.Month} {post.Year}
            </span>
          </div>
        </div>

        <div className="news_card_body">
          <span className="news_card_tag">ISIF {post.Year} Coverage</span>
          <CardLinkWrapper>
            <h5 className="news_card_title" title={post.btitle}>
              {post.btitle}
            </h5>
          </CardLinkWrapper>
          <p className="news_card_desc">{post.bdescription}</p>

          <div className="news_card_footer">
            {isExternal ? (
              <a
                href={post.Pagelink}
                target="_blank"
                rel="noopener noreferrer"
                className="news_see_more_btn"
              >
                <span>See More</span>
                <span className="btn_icon">
                  <i className="ti-arrow-right"></i>
                </span>
              </a>
            ) : (
              <Link to={post.Pagelink} className="news_see_more_btn">
                <span>See More</span>
                <span className="btn_icon">
                  <i className="ti-arrow-right"></i>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsListItem = ({ ServiceData, selectedYear }) => {
  const newsList = ServiceData?.NewsList || [];

  // Extract unique years in descending order
  const availableYears = Array.from(
    new Set(newsList.map((item) => item.Year))
  ).sort((a, b) => Number(b) - Number(a));

  // Filter years based on selection
  const yearsToDisplay =
    selectedYear === "ALL"
      ? availableYears
      : availableYears.filter((year) => year === selectedYear);

  return (
    <>
      {yearsToDisplay.map((year) => {
        const yearPosts = newsList.filter((item) => item.Year === year);
        if (yearPosts.length === 0) return null;

        return (
          <div className="news_year_section" key={year} id={`year-${year}`}>
            <div className="news_year_header">
              <div className="news_year_title_wrap">
                <span className="news_year_badge">{year}</span>
                <h3 className="news_year_title">News & Media Articles</h3>
              </div>
              <span className="news_year_count">
                {yearPosts.length} {yearPosts.length === 1 ? "Article" : "Articles"}
              </span>
            </div>

            <div className="news_grid_row">
              {yearPosts.map((post, index) => (
                <NewsCard key={post.id || `${year}-${index}`} post={post} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsListItem;
