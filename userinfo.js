let user_name = sessionStorage.getItem("name") || "Guest";
let user_email = sessionStorage.getItem("email") || "Not Provided";
let user_mobile = sessionStorage.getItem("mobile") || "Not Provided";
let user_points = sessionStorage.getItem("points") || "0";

document.querySelector("span.name").textContent = user_name;
document.querySelector("span.email").textContent = user_email;
document.querySelector("span.mobile").textContent = user_mobile;
document.querySelector("span.points").textContent = user_points;
