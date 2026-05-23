const defaultAvatar = "https://tv25.pages.dev/assets/default_pfp.png"

function applyGuideProfile() {
  const profile =
    localStorage.getItem("guide-profile") || defaultAvatar

  const name =
    localStorage.getItem("guide-name") || "TV25 User"

  const status =
    localStorage.getItem("guide-status") || "Welcome!"

  const avatar = document.getElementById("guide-user-avatar")

  if (avatar) {
    avatar.style.backgroundImage = `url("${profile}") !important`
  }

  Array.prototype.forEach.call(document.querySelectorAll(".guide-user-name"), function(el) {
    el.textContent = name
  })

  Array.prototype.forEach.call(document.querySelectorAll(".guide-user-unlimited"), function(el) {
    el.textContent = status
  })
}

applyGuideProfile()