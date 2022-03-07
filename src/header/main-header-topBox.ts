import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import './main-header-topSearchBox'

@customElement('main-header-topbox')
class MainHeaderTopBox extends LitElement {

    static styles = css`
   
        .topBox{
            width: 20vw;
            height: 40vh;
            background-color: greenyellow;
            font-family: 'Fredoka';
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
    `;

    render() {
        return html`
            <div class="topBox">
                <div>
                    DIVE.JS
                </div>
                <main-header-topsearchbox></main-header-topsearchbox>
            </div>
        `;
    }
}