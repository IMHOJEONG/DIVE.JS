import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('main-header-element')
class MainHeaderElement extends LitElement {
    static styles = css`
        button {
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            width: 100%;
        }

        button:hover {
            background: skyblue;
        }
    `;
    @property({ type: String})
    title = '';

    render() {
        return html`
            <button>
                ${this.title}
            </button>
        `;
    }
}