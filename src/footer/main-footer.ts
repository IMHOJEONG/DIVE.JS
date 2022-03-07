import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('main-footer')
class MainFooter extends LitElement {

    static styles = css`
        footer {
            display: flex;
            flex: 1;
            width : 20vw;
            height: 100vh;
            font-family: 'Fredoka';
            justify-content: center;
            align-items: center;
            background-color: royalblue;
        }
    `;

    render() {
        return html`
            <footer>
                <div>
                    Footer
                </div>
            </footer>
        `;
    }
}