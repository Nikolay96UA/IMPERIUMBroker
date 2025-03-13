document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownList = document.querySelector(".dropdown-list");

  function getCurrentLanguage() {
    return localStorage.getItem("selectedLanguage") || "en";
  }

  function setInitialLanguage() {
    const currentLang = getCurrentLanguage();
    const selectedOption = document.querySelector(
      `.dropdown-list li[data-lang="${currentLang}"]`
    );
    if (selectedOption) {
      dropdownBtn.textContent = selectedOption.textContent;
    }
  }

  dropdownBtn.addEventListener("click", function () {
    dropdownList.classList.toggle("show");
  });

  dropdownList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedLang = event.target.getAttribute("data-lang");
      dropdownBtn.textContent = event.target.textContent;
      localStorage.setItem("selectedLanguage", selectedLang);
      dropdownList.classList.remove("show");
    }
  });

  // Закрываем список при клике вне него
  document.addEventListener("click", function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownList.contains(event.target)
    ) {
      dropdownList.classList.remove("show");
    }
  });

  // Устанавливаем язык при загрузке страницы
  setInitialLanguage();
});
