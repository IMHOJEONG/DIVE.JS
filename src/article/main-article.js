var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './main-article-post';
let MainArticle = class MainArticle extends LitElement {
    render() {
        return html `
            <article>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
            </article>
        `;
    }
};
MainArticle.styles = css `
        article {
            display: grid;
            grid-template-columns: repeat(3, 100px); 
            grid-template-rows: 1;
            grid-gap: 1vw;
            padding: 1vw;
            flex: 2;
            width : 60vw;
        }
    `;
MainArticle = __decorate([
    customElement('main-article')
], MainArticle);
