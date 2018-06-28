import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `kwc-picker`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KwcPicker extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'kwc-picker',
      },
    };
  }
}

window.customElements.define('kwc-picker', KwcPicker);
