document.addEventListener("DOMContentLoaded", function () {
  var collapsibleLink = document.querySelector(".toggle-collapse");
  var collapsibleIcon = document.querySelector(".toggle-icon");
  var myCollapsible = document.getElementById("collapseCompany");

  if (collapsibleLink && collapsibleIcon && myCollapsible) {
    // Add event listeners for Bootstrap collapse events
    myCollapsible.addEventListener("shown.bs.collapse", function () {
      // Add rotation when the collapse is shown
      collapsibleIcon.classList.add("rotate-180");
    });

    myCollapsible.addEventListener("hidden.bs.collapse", function () {
      // Remove rotation when the collapse is hidden
      collapsibleIcon.classList.remove("rotate-180");
    });

    // Optional: Initialize the collapse manually to control it programmatically
    var collapseInstance = new bootstrap.Collapse(myCollapsible, {
      toggle: false,
    });

    // Add click listener to the toggle link
    collapsibleLink.addEventListener("click", function () {
      // Toggle the collapse manually
      if (myCollapsible.classList.contains("show")) {
        collapseInstance.hide(); // Collapse content
      } else {
        collapseInstance.show(); // Expand content
      }
    });
  }
});

// Get all the menu links
const menuLinks = document.querySelectorAll(".menu-link");

// Add a click event listener to each menu link
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the associated sub-nav for the clicked link
    const subNav = link.nextElementSibling;
    
    if (link.classList.contains("nested")) {
      subNav.style.width = link.clientWidth + "px";
      subNav.style.border = "1px solid #ddd";
    }

    // Toggle the display of the sub-nav
    if (subNav.style.display === "block") {
      subNav.style.display = "none";
    } else {
      subNav.style.display = "block";
    }
  });
});

//   <!-- Initialize Swiper -->
