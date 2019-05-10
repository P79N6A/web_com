import { html } from 'lit-element';

export default (self, classList = '') => html`
<style>
    .wrapper {
        color: ${self.color};
        background-color: ${self['background-color']};
        border-radius: ${self.radius};
        border: 1px solid;
        padding: 5px 10px;
        box-sizing: border-box;
    }

    .is-disabled {
        pointer-events: none;
        cursor: not-allowed;
        color: #fff;
        background: #999;
    }

    .wrapper:not(.is-default) {
        min-width: ${self.width};
        height: ${self.height};
    }

    ::slotted(*) {
        padding: 0;
        margin: 0;
        display: inline;
    }

    button {
      outline: none;
      border: none;
      padding: 0;
      background: transparent;
      color: ${self.color};
    }

    button:empty {
        display: none;
    }
</style>
<div class="wrapper ${classList}">
    <button>${self.text}</button>
    <slot></slot>
</div>
`;
