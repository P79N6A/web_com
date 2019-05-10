
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('luban-button')
export default class LubanButton extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  width: string = '0';

  @property({attribute: true})
  height: string = '0';

  @property({attribute: true})
  icon: string = '';

  @property({attribute: true})
  color: string = '#333';

  @property({attribute: true})
  ['background-color']: string = '#fff';

  @property({type: Boolean})
  round: boolean = false;

  @property({attribute: true})
  radius: string = '0';

  @property({attribute: true})
  disabled: boolean = false;

  @property({attribute: true})
  text: string = '';

  protected render() {
    const classList:string[] = [];

    if(!this.icon) {
      classList.push()
    }

    if(this.disabled) {
      classList.push('is-disabled');
    }

    if(!parseFloat(this.width) && !parseFloat(this.height)) {
      classList.push('is-default');
    }
  
    if(this.round) {
      this.radius = '50%';
    }

    return html`${template(this, classList.join(' '))}`;
  }
}
