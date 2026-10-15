window.enterSite = function() {
  const ageGate = document.getElementById("ageGate");

  if (!ageGate) return;

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

window.showMemberNotice = function() {
  const notice = document.getElementById("memberNotice");

  if (notice) {
    notice.style.display = "flex";
  }
};

window.closeMemberNotice = function() {
  const notice = document.getElementById("memberNotice");

  if (notice) {
    notice.style.display = "none";
  }
};

const ageGate = document.getElementById("ageGate");

if (ageGate) {
  document.body.style.overflow = "hidden";
}
