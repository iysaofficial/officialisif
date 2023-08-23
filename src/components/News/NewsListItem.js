import React, { Component } from "react";
class NewsListItem extends Component {
  render() {
    let ServiceData = this.props.ServiceData;
    return (
      <>
        {ServiceData.NewsList.map((post) => {
          return (
            <>
              <div className="blog_list_item mb_50" key={post.id}>
                <img
                  className="img-fluid"
                  src={require("../../img/" + post.image)}
                  alt=""
                />
                <div className="blog_content">
                  <div className="post_date">
                    <h2>
                      {post.Month} <span>{post.Year}</span>
                    </h2>
                  </div>
                  <a href={post.Pagelink}>
                    <h5 className="f_p f_size_20 f_500 t_color mb_20">
                      {post.btitle}
                    </h5>
                  </a>
                  <p className="f_400 mb_20">{post.bdescription}</p>
                  <a href={post.Pagelink} className="learn_btn_two">
                    Read More <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}
export default NewsListItem;
