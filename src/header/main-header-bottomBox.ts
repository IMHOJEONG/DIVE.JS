import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import './main-header-element';

@customElement('main-header-bottombox')
class MainHeaderBottomBox extends LitElement {

    static styles = css`
        div{
            width: 20vw;
            height: 50vh;
            overflow: scroll;
            /* scrollbar-color: red; */
        }
        

        ::-webkit-scrollbar {
           display: none;
           border-radius: 10px;
        }
    `;

    @property({ type: Array } ) 
    private headerElement = ['JS', 'TS', 'Computer Science', 'Node.js', 'Nest.js'];


    render() {
        return html`
            <div>
                ${this.headerElement.map(
                        (item)=>{
                            return html`<main-header-element title=${item}></main-header-element>`
                        }
                    )}

            </div>
        `;
    }
}