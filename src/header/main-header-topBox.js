var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './main-header-topSearchBox';
let MainHeaderTopBox = class MainHeaderTopBox extends LitElement {
    render() {
        return html `
            <div class="topBox">
                <div>
                    DIVE.JS
                </div>
                <main-header-topsearchbox></main-header-topsearchbox>
            </div>
        `;
    }
};
MainHeaderTopBox.styles = css `
   
        .topBox{
            width: 20vw;
            height: 40vh;
            background-color: greenyellow;
            font-family: 'Fredoka';
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
    `;
MainHeaderTopBox = __decorate([
    customElement('main-header-topbox')
], MainHeaderTopBox);
