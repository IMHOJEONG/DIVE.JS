var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './main-header-topBox';
import './main-header-bottomBox';
let MainHeader = class MainHeader extends LitElement {
    render() {
        return html `
            <header>
                <main-header-topbox></main-header-topbox>
                <main-header-bottombox></main-header-bottombox>
            </header>
        `;
    }
};
MainHeader.styles = css `
        header {
            display: flex;
            flex-direction: column;
            flex: 1;
            width : 20vw;
        }
    `;
MainHeader = __decorate([
    customElement('main-header')
], MainHeader);
