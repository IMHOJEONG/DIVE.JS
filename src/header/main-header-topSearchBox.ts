import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('main-header-topsearchbox')
class MainHeaderTopSearchBox extends LitElement {

    static styles = css`
/* 
        .topSearchBox{
            width: 20vw;
            height: 10vh;
            background-color: rebeccapurple;
            font-family: 'Fredoka';
            display: flex;
            justify-content: center;
            align-items: center;
        } 
        */

    `;

    render() {
        return html`
            <div class="topSearchBox">
                <input  />
            </div>
        `;
    }
}