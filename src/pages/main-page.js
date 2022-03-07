var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../header/main-header.js';
import '../article/main-article.js';
import '../footer/main-footer.js';
let MainPage = class MainPage extends LitElement {
    render() {
        return html `
        
            <main-header></main-header>
            <main-article></main-article>
            <main-footer></main-footer>
    
        `;
    }
};
MainPage.styles = css `
        :host {
            display: flex;
        }

    `;
MainPage = __decorate([
    customElement('main-page')
], MainPage);
