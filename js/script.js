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
    const isNested = link.classList.contains("nested");
    const nestedContainer = document.querySelector(".sub-nav.active-p");
    const activeContainer = document.querySelector(
      ".nav-popup-container.active-p"
    );

    if (isNested && nestedContainer) {
      nestedContainer.classList.remove("active-p");
    } else {
      subNav.classList.remove("active-p");
    }
    if (!isNested && activeContainer) {
      activeContainer.classList.remove("active-p");
    } else {
      subNav.classList.add("active-p");
    }

    if (isNested) {
      const emptyContainer = document.querySelector(".empty-div");
      emptyContainer.style.borderRight = "1px solid #707070";
      subNav.style.width = link.clientWidth + "px";
    }

    // // Toggle the display of the sub-nav
    // if (subNav.style.display === "block") {
    //   subNav.style.display = "none";
    //   link.style.color = "white";
    // } else {
    //   link.style.color = "#fab600";
    //   subNav.style.display = "block";
    // }
  });
});

//   <!-- Initialize Swiper -->
