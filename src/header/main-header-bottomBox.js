var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import './main-header-element';
let MainHeaderBottomBox = class MainHeaderBottomBox extends LitElement {
    constructor() {
        super(...arguments);
        this.headerElement = ['JS', 'TS', 'Computer Science', 'Node.js', 'Nest.js'];
    }
    render() {
        return html `
            <div>
                ${this.headerElement.map((item) => {
            return html `<main-header-element title=${item}></main-header-element>`;
        })}

            </div>
        `;
    }
};
MainHeaderBottomBox.styles = css `
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
__decorate([
    property({ type: Array })
], MainHeaderBottomBox.prototype, "headerElement", void 0);
MainHeaderBottomBox = __decorate([
    customElement('main-header-bottombox')
], MainHeaderBottomBox);
