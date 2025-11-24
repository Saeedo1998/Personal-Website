
// window.onload = function loadFooter() {
//     document.write('\
//     <div class="footer text-center"> \
//         Saeed Badghaish © 2021 \
//     </div> \
//     ')
// }

//YESSS FUCKING FINALLY WORKED
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div class="footer text-center">
      Saeed Badghaish © 2025
      </div>
      `;
    }
  }
      
  customElements.define('footer-saeed', Footer);