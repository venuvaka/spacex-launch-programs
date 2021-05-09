import React from "react";
import "./index.css";

const Filter = ({
  selectedYear,
  setSelectedYear,
  successLaunch,
  setSuccessLaunch,
  successLand,
  setSuccessLand,
}) => {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <section>
      <div className="filter-wrapper p-3">
        <h5>Filters</h5>
        <div className="filter-year text-center">
          <span>Launch Year</span>
          <div className="custom-border" />
          <div className="d-flex row justify-content-between px-3">
            {years.map((year) => (
              <span
                key={year}
                onClick={() =>
                  setSelectedYear(selectedYear !== year ? year : "")
                }
                className={`${
                  selectedYear.includes(year) ? "active" : "year"
                } col-5 my-2`}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
        <div className="filter-year text-center pt-3">
          <span>Successful Launch</span>
          <div className="custom-border" />
          <div className="d-flex row justify-content-between px-3">
            <span
              onClick={() =>
                setSuccessLaunch(successLaunch !== "success" ? "success" : null)
              }
              className={`${
                successLaunch === "success" ? "active" : "year"
              } col-5 my-2`}
            >
              True
            </span>
            <span
              onClick={() =>
                setSuccessLaunch(
                  successLaunch !== "notsuccess" ? "notsuccess" : null
                )
              }
              className={`${
                successLaunch === "notsuccess" ? "active" : "year"
              } col-5 my-2`}
            >
              False
            </span>
          </div>
        </div>
        <div className="filter-year text-center pt-3">
          <span>Successful Landing</span>
          <div className="custom-border" />
          <div className="d-flex row justify-content-between px-3">
            <span
              onClick={() =>
                setSuccessLand(successLand !== "success" ? "success" : null)
              }
              className={`${
                successLand === "success" ? "active" : "year"
              } col-5 my-2`}
            >
              True
            </span>
            <span
              onClick={() =>
                setSuccessLand(
                  successLand !== "notsuccess" ? "notsuccess" : null
                )
              }
              className={`${
                successLand === "notsuccess" ? "active" : "year"
              } col-5 my-2`}
            >
              False
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
