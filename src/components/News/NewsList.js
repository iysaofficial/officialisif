import React, { useState } from "react";
import NewsListItem from "../News/NewsListItem";
import ServiceData from "../Service/ServiceData";
import "./news.css";

const NewsList = () => {
  const [selectedYear, setSelectedYear] = useState("ALL");

  const newsList = ServiceData?.NewsList || [];
  const years = Array.from(
    new Set(newsList.map((item) => item.Year))
  ).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="news_section_wrapper">
      <div className="container">
        {/* Year Filter Buttons */}
        <div className="news_filter_container">
          <div className="news_filter_nav">
            <button
              type="button"
              className={`news_filter_btn ${selectedYear === "ALL" ? "active" : ""}`}
              onClick={() => setSelectedYear("ALL")}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                type="button"
                className={`news_filter_btn ${selectedYear === year ? "active" : ""}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* News Items grouped by Year */}
        <div className="news_content_area">
          <NewsListItem
            ServiceData={ServiceData}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsList;
