// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("show"));
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enquiry form -> opens WhatsApp with the message pre-filled
const form = document.getElementById("enquiry-form");
if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const d = new FormData(form);
    const text =
      `Namaste SAMAR KHAD STORE,%0A%0A` +
      `Name: ${encodeURIComponent(d.get("name"))}%0A` +
      `Phone: ${encodeURIComponent(d.get("phone"))}%0A` +
      `Village/City: ${encodeURIComponent(d.get("village") || "-")}%0A` +
      `Product: ${encodeURIComponent(d.get("product"))}%0A` +
      `Quantity: ${encodeURIComponent(d.get("qty") || "-")}%0A%0A` +
      `${encodeURIComponent(d.get("message") || "")}`;
    window.open(`https://wa.me/919568840388?text=${text}`, "_blank", "noopener");
  });
}

// Pre-select product from ?product= in the URL
const params = new URLSearchParams(location.search);
const productSelect = document.getElementById("product");
if (productSelect && params.get("product")) {
  productSelect.value = params.get("product");
}
