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
    event.preventDefault();

    const subNav = link.nextElementSibling; // Get the associated sub-nav
    const isNested = link.classList.contains("nested"); // Check if it's nested
    const activeNested = document.querySelector(".sub-nav.active-p"); // Currently active sub-nav
    const activeContainer = document.querySelector(
      ".nav-popup-container.active-p"
    ); // Currently active nav-popup-container

    // Remove active class from previously active nested sub-nav
    if (isNested && activeNested) {
      activeNested.classList.remove("active-p");
    }

    // Remove active class from non-nested active container
    if (!isNested && activeContainer) {
      activeContainer.classList.remove("active-p");
    }

    // Add active class to the clicked sub-nav if not already active
    if (isNested && subNav !== activeNested) {
      subNav.classList.add("active-p");
      const emptyContainer = document.querySelector(".empty-div");
      emptyContainer.style.borderRight = "1px solid #707070";
      subNav.style.width = link.clientWidth + "px";
    } else if (!isNested && subNav !== activeContainer) {
      subNav.classList.add("active-p");
    }
  });
});

//   <!-- Initialize Swiper -->
