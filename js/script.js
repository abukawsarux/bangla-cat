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

// ---------mobile nav------
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobileMenuToggle");
  const menuClose = document.getElementById("mobileMenuClose");
  const mobileMenu = document.querySelector(".mobile-menu-wrapper");

  // Handle expand/collapse icons
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((item) => {
    const icon = item.querySelector(".mobile-expand-icon");
    item.addEventListener("click", () => {
      icon.classList.toggle("mobile-rotate-icon");
    });
  });

  // Toggle menu
  function toggleMenu() {
    mobileMenu.classList.toggle("show");
    document.body.classList.toggle("mobile-menu-open");
  }

  menuToggle.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
});

// ---------mobile nav------
