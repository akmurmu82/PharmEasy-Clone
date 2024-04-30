
function Navbar() {
  let navbar = document.createElement("div");
  navbar.innerHTML = `
        <h1 class="${styles.navbar}">Navbar</h1>
    `;
  return navbar;
}
export { Navbar };
