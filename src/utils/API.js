// import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=200&nat=us";


// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   get: function () {
//     return axios.get(BASEURL);
//   }
// };

/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

 
// Export an object containing methods we'll use for accessing the random user API

export default{ 
    getEmployees:function(){    

        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};