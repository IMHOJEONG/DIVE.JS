import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import './main-header-topBox';
import './main-header-bottomBox';

@customElement('main-header')
class MainHeader extends LitElement {

    static styles = css`
        header {
            display: flex;
            flex-direction: column;
            flex: 1;
            width : 20vw;
        }
    `;

 
    render() {
        return html`
            <header>
                <main-header-topbox></main-header-topbox>
                <main-header-bottombox></main-header-bottombox>
            </header>
        `;
    }
}