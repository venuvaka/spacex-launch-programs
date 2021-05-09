import React, { useEffect, useState } from "react";
import "./index.css";

const ProgramList = ({ programs }) => {
  return (
    <section>
      {!programs.length > 0 && <h5 className="text-center">No programs found. Change your filter and try again.</h5>}
      {programs.length > 0 && (
        <div className="d-flex row col-16">
          {programs.map((program) => (
            <div key={program.flight_number} className="col-lg-3 col-sm-12">
              <div className="card mb-4">
                <div className="p-3">
                  <img
                    className="card-img-top"
                    src={program.links.mission_patch}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <a
                    href={program.links.article_link}
                    target="blank"
                    className="text-decoration-none"
                  >
                    <h5 className="card-title">{`${program.mission_name} #${program.flight_number}`}</h5>
                  </a>
                  <div>
                    <b>Mission Ids: </b>
                    <ul>
                      {program.mission_id.map((id) => (
                        <li>{id}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <b>Launch Year: </b>
                    <span>{program.launch_year}</span>
                  </div>
                  <div>
                    <b>Successful Launch: </b>
                    <span>{program.launch_success ? "true" : "false"}</span>
                  </div>
                  <div>
                    <b>Successful Land: </b>
                    <span>{program.launch_landing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProgramList;
