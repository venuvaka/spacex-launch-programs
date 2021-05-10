import React, { useEffect, useState } from "react";
import APIEndpoints from "../../api/endpoints";
import Filter from "../filter";
import ProgramList from "../programsList";

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [successLaunch, setSuccessLaunch] = useState(null);
  const [successLand, setSuccessLand] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(async () => {
    let data = [];
    const launch = successLaunch === "success";
    const land = successLand === "success";
    if (!selectedYear && !successLaunch && !successLand) {
      data = await APIEndpoints.allLaunches().then((res) => res);
    } else if (!selectedYear && successLaunch && !successLand) {
      data = await APIEndpoints.launchFilterAPI(launch).then((res) => res);
    } else if (!selectedYear && successLand) {
      data = await APIEndpoints.launchAndLandFilterAPI(launch, land).then(
        (res) => res
      );
    } else {
      data = await APIEndpoints.allFiltersAPI(launch, land, selectedYear).then(
        (res) => res
      );
    }
    setPrograms(data);
  }, [selectedYear, successLaunch, successLand]);

  return (
    <div className="d-flex row col-16">
      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <Filter
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          successLaunch={successLaunch}
          setSuccessLaunch={setSuccessLaunch}
          successLand={successLand}
          setSuccessLand={setSuccessLand}
        />
      </div>
      <div className="col-lg-9 col-md-6 col-sm-12">
        <ProgramList programs={programs} />
      </div>
    </div>
  );
};

export default Dashboard;
