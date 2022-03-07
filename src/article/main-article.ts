import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import './main-article-post';

@customElement('main-article')
class MainArticle extends LitElement {

    static styles = css`
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


    render() {
        return html`
            <article>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
                <main-article-post></main-article-post>
            </article>
        `;
    }
}