const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const dropdown = document.querySelector(".nav-dropdown");
const dropdownButton = dropdown?.querySelector(":scope > button");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

if (dropdown && dropdownButton) {
  const closeDropdown = () => {
    dropdown.classList.remove("is-open");
    dropdownButton.setAttribute("aria-expanded", "false");
  };

  dropdownButton.addEventListener("click", () => {
    const isOpen = dropdownButton.getAttribute("aria-expanded") === "true";
    dropdown.classList.toggle("is-open", !isOpen);
    dropdownButton.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdown();
      dropdownButton.focus();
    }
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
