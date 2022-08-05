class Icon extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<link rel="icon" href="Images\S-logo-inverted-circle-blue-1024x1024-circle2.png">`;
    }
  }
      
  customElements.define('icon-saeed', Icon);