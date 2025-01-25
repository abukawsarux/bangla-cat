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

/* Add onscroll animation */
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".desktop-nav");
  if (window.scrollY > 120) {
    navbar.style.background =
      "rgba(0, 0, 0, 1)"; /* Fill black with opacity 1 */
  } else {
    navbar.style.background =
      "rgba(0, 0, 0, 0.8)"; /* Restore original background */
  }
});

//toggleContent News Content Show More / Show Less
function toggleContent() {
  const content = document.getElementById("news-content");
  const button = document.getElementById("toggle-btn");

  if (content.classList.contains("collapsed")) {
    content.style.height = content.scrollHeight + "px"; // Expand to full height
    content.classList.remove("collapsed");
    button.innerText = "Less";
  } else {
    content.style.height = "100px"; // Collapsed height
    content.classList.add("collapsed");
    button.innerText = "More";
  }
}

// Add event listener for animation end to reset inline styles
document
  .getElementById("news-content")
  .addEventListener("transitionend", () => {
    const content = document.getElementById("news-content");
    if (!content.classList.contains("collapsed")) {
      content.style.height = "auto"; // Reset height to auto after animation
    }
  });



  