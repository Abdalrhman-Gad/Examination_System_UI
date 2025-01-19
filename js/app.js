import { FirstPageView } from "./view/firstPageView.js";

const routes = {
  a: FirstPageView.renderFirstPage,
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(routes.a());
});
