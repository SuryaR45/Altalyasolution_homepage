 const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove("max-h-0", "py-0");
      mobileMenu.classList.add("max-h-[500px]", "py-6","px-6", "items-center");
    } else {
      mobileMenu.classList.add("max-h-0", "py-0");
      mobileMenu.classList.remove("max-h-[500px]", "py-6","px-6");
    }
  });