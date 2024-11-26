// portfolio.js
// provides all the locally held javascript for the portfolio pages


// there are two versions of the navigationbar-top, one is a bar across the top and the other is just my name and hamburger menu
// this function finds the element "menu" in the DOM and toggles the class name between "navigation-top" and "navigation-top hamburger"
// the addition of the hamburger class
// the hamburgerMenuItem can only be clicked when it is visible
// and this function is an onclick event called when the hamburger menu is clicked
// the @media responsiveness section in the portfolio.css controls if the hamburgerMenuItem is visible  
// ideas and orginal code for this from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp 
    function hamburgerMenuToggle() {
      // find the element with the id of "menu" in the document object model, returns the element
      var foundElement = document.getElementById("menu");
      // if classed in the found element matches what we're expecting (in case there are other id's called menu)
      if (foundElement.className === "navigationbar-top") {
        // add the hamburger class to the list of classes for this element in the Document Object Model
        foundElement.className += " hamburger";
      } else {
        // make sure there is no additional hamburger class for the element - this removes the hamburger
        // icon so it can't be clicked
        foundElement.className = "navigationbar-top";
      }
      return(false);
  }