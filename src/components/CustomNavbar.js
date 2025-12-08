import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var {
      mClass,
      nClass,
      cClass,
      slogo,
      // hbtnClass,
    } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <img
                  src={require("../img/home_isif.png")}
                  alt=""
                  style={{
                    width: "163px",
                  }}
                />
                <img
                  src={require("../img/home_isif.png")}
                  alt="logo"
                  style={{
                    width: "163px",
                  }}
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link" title="home">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Media
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/PageNewsList"
                        >
                          News from Media
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/12D5KTwhSXcKZO8osMVpFk47Etgk0kGzY/view?usp=sharingcd"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2025
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/1kNhPgPbXJ6PcirFeKAEn6cFhWyHh2nsx/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2024
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/1tCNqnQH-uL4rZ3Sw-uhiomupn5ZTtMjd/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2023
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      title="Service"
                      className="nav-link"
                      to="/ListOfWinner"
                    >
                      List of Winners
                    </NavLink>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Curation
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1ihGVWoBzJgm7mVmlKRh7wylGBt_LH-rp?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2025
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1Z2fNu4yJv9XtmFQxMdOkdw55XWlOIo8u?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2024
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1p4r5adnMHyf5CEqL6f3IoL8zmoH1qF8G?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2023
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1znfA6pHSrF3qbg7gWzXxulM2666EAK-u?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1w4rtwE0M7rn8e3hqaveB4njlw4KmKJfE?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2021
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/15ZIgSohXPRl7O7zrqyDR4oCurHq-AeR_?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2020
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Certificate
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1l-WOo8TwEBAcD6k21bNUsSXSEEeX0W9n?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Certificate Supervisor"
                          className="nav-link"
                        >
                          Certificate Supervisor Online 2025
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/13egdAI5zZO9vYGK3IJsSVVkRsDtZ13yT?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Certificate Supervisor"
                          className="nav-link"
                        >
                          Certificate Supervisor Online 2024
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1TkfNsAgPQ4GWrMZrH2EbOL4XjMj3nP77?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Certificate Supervisor"
                          className="nav-link"
                        >
                          Certificate Supervisor Online 2023
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gallery
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1p-oWDrc1b9JgqGjVkgZ3tWzin0SCTDed?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2025
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1p9ZRMi7TI6JzMjNCmeiBhlwIuxLqt7YC?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2024
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/11phBTa4qXqwNViMttlydJ_lT8M4pjP-G?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2023
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/11CHleI2R5Y5-oxZ0b8p5CIZAMvc8SXl0"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1g-dfsRAEqqLAVmeO3uIxtUyjE8C0UB_s"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2021
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/u/2/folders/1LbbxZ5RBX3BC1qLgzwGNVczIWjIGiaXq"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2020
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1HbPL_lBUi4B2Z5p1PRyirqZ1imp8BaNt"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Gallery 2019
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      title="Service"
                      className="nav-link"
                      to="/Faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      target="_blank"
                      href="https://drive.google.com/file/d/16NbKYbNW9Ni621NUoLZm0M32tkShUruh/view?usp=sharing"
                    >
                      Guide Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Contact" className="nav-link" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
