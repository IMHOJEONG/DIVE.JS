var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
let MainFooter = class MainFooter extends LitElement {
    render() {
        return html `
            <footer>
                <div>
                    Footer
                </div>
            </footer>
        `;
    }
};
MainFooter.styles = css `
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
MainFooter = __decorate([
    customElement('main-footer')
], MainFooter);
