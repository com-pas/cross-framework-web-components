import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-component-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
    this.dispatchEvent(
      new CustomEvent('counter-incremented', { detail: this.counter })
    );
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
