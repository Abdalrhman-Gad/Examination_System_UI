export function renderHeader() {
  const HEADER = document.getElementById("header");
  HEADER.innerHTML = `<nav class="navbar  m-0 w-100 ">
<input
  class="form-control me-2 w-25 m-0"
  type="search"
  placeholder="Search"
  aria-label="Search"
  style="width: 50px"
/>
<div class="links">
  <a class="navbar-brand"  id="home" href="/">Home</a>
  <a class="navbar-brand" id="services" href="/">Services</a>
  <a class="navbar-brand" id ="about" href="/">About Us</a>
</div>
<div class="rounded-circle bg-black" style="width: 50px; height: 50px;">

</div>
</nav>`;

  document.getElementById("home").addEventListener("click", (event) => {
    event.preventDefault();
    
    window.location.hash = "#/home";
  });

  document.getElementById("services").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = "#/services";

  });
  document.getElementById("about").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = "#/aboutus";
  });
}
