import { html } from 'lit-element';

export default (self, classList = '') => html`
<style lang="postcss">
    .wrapper {
        width: ${self.width};
        padding-top: ${self.paddingTop || 0};
        border-radius: ${self.radius}
    }
</style>
<div class="wrapper ${classList}">
    <img src="${self.src}" alt="${self.alt}"/>
</div>
`;
