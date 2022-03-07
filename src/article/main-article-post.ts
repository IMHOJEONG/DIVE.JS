import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('main-article-post')
class MainArticle extends LitElement {

    static styles = css`
    
        .main_article_post {
            width: 10vw;
            height: 10vh;
            background-color: red;
        }
    
    `;

    render() {
        return html`
            <div class="main_article_post">
                test 
            </div>
        `;
    }
}