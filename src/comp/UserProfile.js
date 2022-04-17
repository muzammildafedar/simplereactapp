import React from 'react'

var UserProfile = (function() {
    var email = "";
  
    var getName = function() {
      return email;    // Or pull this from cookie/localStorage
    };
    var unSet = function() {
      console.log(email);
      email = ""; 
    };
  
    var setName = function(emailId) {
      email = emailId;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName,
      unSet: unSet
    }
  
  })();
  
  export default UserProfile;