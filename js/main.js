document.getElementById("year").textContent = new Date().getFullYear();
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("show"));

document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
    navMenu.classList.remove('show');
  });
});

document.getElementById("contactForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  document.getElementById("formMessage").innerHTML = "<p style='color:green;margin-top:12px;font-weight:600;'>✓ Message sent successfully! (Demo)</p>";
  e.target.reset();
});