import { html } from 'lit-element';

export default (self, classList = '') => html`
<style>
    .wrapper {
        width: ${self.width};
        height: ${self.height};
        padding-top: ${self.paddingTop || 0};
        border-radius: ${self.radius}
    }
</style>
<div class="wrapper ${classList}">
    <img src="${self.src}" alt="${self.alt}"/>
</div>
`;
