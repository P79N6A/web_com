
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('luban-icon')
export default class LubanIcon extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  icon: string = '';

  protected render() {
    if(this.icon === 'loading') {
        this.icon = require('./loading.svg');
    }
    return html`${template(this)}`;
  }
}
