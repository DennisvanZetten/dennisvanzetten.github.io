// Header loader met automatische active state
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");

  if (headerContainer) {
    fetch("header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        headerContainer.innerHTML = html;
        setActiveNavItem();
        console.log("Header loaded successfully");
      })
      .catch((error) => {
        console.error("Could not load header:", error);
        // Fallback header voor als fetch niet werkt
        headerContainer.innerHTML = `
                    <header>
                        <nav class="container">
                            <a href="index.html" class="logo">Dennis van Zetten</a>
                            <ul class="nav-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html#portfolio">Portfolio</a></li>
                                <li><a href="artikelen.html">Artikelen</a></li>
                                <li><a href="software.html">Software</a></li>
                                <li><a href="over-mij.html">Over Mij</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
                `;
        setActiveNavItem();
      });
  } else {
    console.error("Header container not found!");
  }
});

function setActiveNavItem() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash;

  console.log("Current page:", currentPage, "Hash:", currentHash);

  // Verwijder alle active classes
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
  });

  // Set active based on page
  switch (currentPage) {
    case "index.html":
    case "":
      if (currentHash === "#portfolio") {
        document.getElementById("nav-portfolio")?.classList.add("active");
      } else {
        document.getElementById("nav-home")?.classList.add("active");
      }
      break;
    case "artikelen.html":
      document.getElementById("nav-artikelen")?.classList.add("active");
      break;
    case "software.html":
      document.getElementById("nav-software")?.classList.add("active");
      break;
    case "over-mij.html":
      document.getElementById("nav-over")?.classList.add("active");
      break;
    case "contact.html":
      document.getElementById("nav-contact")?.classList.add("active");
      break;
    default:
      console.log("No matching page found for:", currentPage);
  }
}

// Update active state when hash changes (for portfolio link)
window.addEventListener("hashchange", setActiveNavItem);
