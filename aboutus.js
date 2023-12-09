function validateForm() {
    // Get the form elements
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var company = document.getElementById("company");
    var size = document.getElementById("size");
    var country = document.getElementById("country");
    var message = document.getElementById("message");
  
    // Check if the required fields are empty
    if (firstName.value == "") {
      alert("Please enter your first name.");
      return false;
    }
    if (lastName.value == "") {
      alert("Please enter your last name.");
      return false;
    }
    if (email.value == "") {
      alert("Please enter your work email.");
      return false;
    }
    if (company.value == "") {
      alert("Please enter your company name.");
      return false;
    }
    if (size.value == "") {
      alert("Please select your company size.");
      return false;
    }
    if (country.value == "") {
      alert("Please select your country.");
      return false;
    }
  
    // Check if the email is valid
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid work email.");
      return false;
    }
  
    // If everything is OK, submit the form
    return true;
  }
  