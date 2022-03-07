var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let MainHeaderElement = class MainHeaderElement extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
    }
    render() {
        return html `
            <button>
                ${this.title}
            </button>
        `;
    }
};
MainHeaderElement.styles = css `
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
__decorate([
    property({ type: String })
], MainHeaderElement.prototype, "title", void 0);
MainHeaderElement = __decorate([
    customElement('main-header-element')
], MainHeaderElement);
