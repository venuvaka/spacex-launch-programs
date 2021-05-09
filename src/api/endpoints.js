const baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

const APIEndpoints = {
  allLaunches() {
    return new Promise((resolve, reject) => {
      fetch(baseUrl)
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  launchFilterAPI(launchSuccess) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}&launch_success=${launchSuccess}`)
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  launchAndLandFilterAPI(launchSuccess, landSuccess) {
    return new Promise((resolve, reject) => {
      fetch(
        `${baseUrl}&launch_success=${launchSuccess}&land_success=${landSuccess}`
      )
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  allFiltersAPI(launchSuccess, landSuccess, years) {
    return new Promise((resolve, reject) => {
      fetch(
        `${baseUrl}&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${years}`
      )
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};

export default APIEndpoints;
