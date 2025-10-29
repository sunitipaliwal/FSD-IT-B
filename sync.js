function login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Login Successfuls suniti 254");
        resolve("Done");
      }, 2000);
    });
  }
  
  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data Fetching...");
        resolve("Data Fetched");
      }, 1500);
    });
  }
  
  function DisplayData() {
    return getData().then((msg) => {
      console.log("DisplayData:", msg);
      return msg;
    });
  }
  
  function logout(isLoggedIn) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLoggedIn) {
          console.log("LogOut Success");
          resolve("User logged out");
        } else {
          console.log("LogOut Failed");
          reject("User not logged in");
        }
      }, 1000);
    });
  }
  
  function conductTest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Conducting Test...");
        const result = Math.random() > 0.5 ? "Test Passed" : "Test Failed";
        console.log("Test Result:", result);
        resolve(result);
      }, 1200);
    });
  }
  
  login()
    .then(() => DisplayData())
    .then(() => conductTest())
    .then(() => logout(true))
    .then((msg) => console.log("Promise Resolved:", msg))
    .catch((err) => console.log("Promise Rejected:", err));
  
  async function mainFlow() {
    try {
      await login();
      const data = await getData();
      console.log("DisplayData:", data);
      const testResult = await conductTest();
      console.log("Conduct Test Result:", testResult);
      const logoutMsg = await logout(true);
      console.log("Promise Resolved:", logoutMsg);
    } catch (err) {
      console.log("Promise Rejected:", err);
    }
  }
  
  
  mainFlow();