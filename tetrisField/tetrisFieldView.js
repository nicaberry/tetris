"use strict";

export class TetrisFieldView {
    constructor(container, fieldModel) {
        this.container = container;
        this.fieldModel = fieldModel;
    }

    createTetrisField() {
        this.container.innerHTML = "";
        let fieldModel = this.fieldModel.getField();
        fieldModel.forEach((item) => {
            item.forEach((item) => {
                if (item === 0) {
                    let cell = document.createElement("div");
                    cell.classList.add("cell");
                    this.container.append(cell);
                } else if (item === 1) {
                    let cell = document.createElement("div");
                    cell.classList.add("activeCell");
                    this.container.append(cell);
                } else if (item === 2) {
                    let cell = document.createElement("div");
                    cell.classList.add("stopCell");
                    this.container.append(cell);
                }
            })
        })
    }
}