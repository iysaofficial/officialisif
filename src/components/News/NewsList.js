import React from "react";
// import Blogrightsidebar from './Blogrightsidebar';
import NewsListItem from "../News/NewsListItem";
import ServiceData from "../Service/ServiceData";
const NewsList = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <NewsListItem ServiceData={ServiceData} />
            <ul className="list-unstyled page-numbers shop_page_number text-left mt_30"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsList;
