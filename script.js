// 🌗 Theme Toggle
document.getElementById("themeToggle").addEventListener("change", function () {
    document.body.className = this.value; // Applies class: light, dark, sepia
  });
  
  // 🔠 Font Size Toggle
  document.getElementById("fontSizeToggle").addEventListener("change", function () {
    document.body.style.fontSize =
      this.value === "small" ? "14px" :
      this.value === "medium" ? "16px" : "18px";
  });
  
  // ♿ High Contrast Toggle
  document.getElementById("highContrastToggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  });
  