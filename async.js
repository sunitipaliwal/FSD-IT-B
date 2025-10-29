function login() {
    setTimeout(()=>{
     console.log("Login Successful suniti 254");
     return "Done";
    },2000)
   }
   
   function getData() {
     setTimeout(()=>{
         console.log("Data Fetching...");
     return "Data Fetched";
     },2000)
   }
   
   function DisplayData() {
    setTimeout(()=>{
     const msg = getData();
     console.log("DisplayData:", msg);
     return msg;
    },2000)
   }
   
   function logout(isLoggedIn) {
     setTimeout(()=>{
         if (isLoggedIn) {
             console.log("LogOut Success");
             return "User logged out";
           } else {
             console.log("LogOut Failed");
             return "User not logged in";
           }
     },2000)
   }
   
   function conductTest() {
     setTimeout(()=>{
      console.log("Conducting Test...")
      const result = Math.random() > 0.5 ? "Test Passed" : "Test Failed"
      console.log("Test Result:", result)
      return result
      },2000)
   }
   
   function mainFlow() {
     const loginMsg = login();
     console.log("Login Result:", loginMsg);
   
     const data = DisplayData();
     console.log("Data Result:", data);
   
     const testResult = conductTest();
     console.log("Conduct Test Result:", testResult);
   
     const logoutMsg = logout(true);
     console.log("Logout Result:", logoutMsg);
   }
   
   mainFlow();