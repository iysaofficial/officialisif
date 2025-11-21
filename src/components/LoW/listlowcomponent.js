import React from "react";

function ListLow() {
  const winners = [
    {
      year: 2025,
      color: "warning",
      link: "/list2025",
      external: true,
    },
    {
      year: 2024,
      color: "primary",
      link: "https://drive.google.com/file/d/1Bb6Y3n57eDutSn_yGPYXtPbHKQ_7sSsO/view?usp=sharing",
      external: false,
    },
    {
      year: 2023,
      color: "primary",
      link: "https://drive.google.com/file/d/1CHrakpLFAKqmWhWhMmmwN33LhK_NCryB/view?usp=sharing",
      external: false,
    },
    {
      year: 2022,
      color: "primary",
      link: "https://drive.google.com/file/d/1xubtwp5yY3WUy4TXfzCrITXPg64u4Nam/view?usp=sharing",
      external: false,
    },
    {
      year: 2021,
      color: "primary",
      link: "https://drive.google.com/file/d/1kJUxkQC5qX_En4nEaadyRKAdG3tzzQoL/view?usp=sharing",
      external: false,
    },
    {
      year: 2020,
      color: "primary",
      link: "https://docs.google.com/spreadsheets/d/1X1brvUOx5QcAO9_mT7dTmqEBRrgSKmXn/edit#gid=1957635472",
      external: false,
    }
  ];
  return (
    <>
      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {winners.map((item) => (
            <div key={item.year} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm text-center">
                {/* Card Body */}
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold fs-4 mb-3">{item.year}</h5>
                  {/* Link Internal atau External */}
                  {item.external ? (
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListLow;
