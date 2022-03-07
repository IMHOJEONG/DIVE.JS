import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../header/main-header.js';
import '../article/main-article.js';
import '../footer/main-footer.js';

@customElement('main-page')
class MainPage extends LitElement {
    
    static styles = css`
        :host {
            display: flex;
        }

    `;

    render() {
        return html`
        
            <main-header></main-header>
            <main-article></main-article>
            <main-footer></main-footer>
    
        `
    }
}