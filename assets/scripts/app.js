const routes = {
  "#/": renderHome,
  "#/products": renderProducts,
  "#/products/:id": renderProduct,
  "#/cart": renderCart,
  "#/login": renderLogin,
  "#/signup": renderSignup,
  "#/forgetPassword": renderForgetPassword,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(hash) {
  appContent.innerHTML = "";
  const path = hash || window.location.hash || "#/";

  if (path.startsWith("#/products/")) {
    const productId = hash.split("#/products/")[1];
    if (productId) {
      renderProduct(productId);
      return;
    }
  }
  const route = routes[path] || routes[404];
  route(appContent);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.location.hash = href.replace("#", "");
    loadRoute(href);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  loadRoute(window.location.hash);
  renderFooter();
});

window.addEventListener("hashchange", () => {
  loadRoute(window.location.hash);
});
