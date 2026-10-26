import React from "react";
import { useState } from "react";

export default function List2026() {
  const [mode, setMode] = useState("Online"); // "Online" or "Offline"

  const categories = [
    {
      label: "Elementary School",
      driveLink: {
        Online:
          "https://drive.google.com/file/d/1mi0ULWVE37sELa6zMirhf-AwAxReijXZ/view?usp=sharing",
        Offline:
          "https://drive.google.com/file/d/1xQLw5CB04QA2aSA4n4knHDSR31D6eXmd/view?usp=sharing",
      },
    },
    {
      label: "Secondary",
      driveLink: {
        Online:
          "https://drive.google.com/file/d/1CB-I9N-S_AwKSBsA0EurNsa3_ZU7iAsm/view?usp=sharing",
        Offline:
          "https://drive.google.com/file/d/1xb80XthWMz9psReY1yeoCjZ2Zn0Jszrs/view?usp=sharing",
      },
    },
    {
      label: "University",
      driveLink: {
        Online:
          "https://drive.google.com/file/d/1ZYKMB1RZT3XDKD0cANv7cHoH90XKKoP7/view?usp=sharing",
        Offline:
          "https://drive.google.com/file/d/1PP7MBJu1a3uBtXOgCv2pLCGRyzmpYcL3/view?usp=sharing",
      },
    },
  ];

  return (
    <>
      <div className="container py-5">
        {/* Mode Switch (Online / Offline) */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group" role="group" aria-label="Mode selection">
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "Online" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("Online")}
            >
              Online
            </button>
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "Offline" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("Offline")}
            >
              Offline
            </button>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((cat) => {
            const link = cat.driveLink[mode]; // jika kosong => falsy
            return (
              <div key={cat.label} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="mb-3 fs-1">
                      <span role="img" aria-label="Trophy">
                        🏆
                      </span>
                    </div>
                    <h5 className="card-title fw-bold">{cat.label}</h5>
                    <p className="text-muted mb-3">
                      List of Winners {cat.label} - 2026 ({mode})
                    </p>

                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Open ${cat.label} winners PDF (${mode})`}
                      >
                        Open
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        disabled
                        aria-label={`${cat.label} ${mode} Coming Soon`}
                      >
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
