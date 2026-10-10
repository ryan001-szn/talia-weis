window.enterSite = function() {
  const ageGate = document.getElementById("ageGate");
  ageGate.style.opacity = "0";
  ageGate.style.transition = "opacity 0.4s ease";
  setTimeout(function() {
    ageGate.style.display = "none";
    document.body.style.overflow = "auto";
  }, 400);
};

window.leaveSite = function() {
  window.location.href = "https://www.google.com";
};

document.body.style.overflow = "hidden";
