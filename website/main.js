const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language-button]");
const preferredLanguage = localStorage.getItem("crossloom-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

function setLanguage(language) {
  const selected = language === "en" ? "en" : "zh";
  root.dataset.language = selected;
  root.lang = selected === "zh" ? "zh-CN" : "en";
  document.title = selected === "zh" ? root.dataset.titleZh : root.dataset.titleEn;
  localStorage.setItem("crossloom-language", selected);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageButton === selected;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
});

setLanguage(preferredLanguage || browserLanguage);

document.getElementById("year").textContent = `© ${new Date().getFullYear()}`;

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
