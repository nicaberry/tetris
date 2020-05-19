"use strict";
import {TetrisFieldModel} from "./tetrisField/tetrisFieldModel";
import {TetrisFieldView} from "./tetrisField/tetrisFieldView";
import {TetrisShapeModel} from "./tetrisShape/tetrisShapeModel";

let tetrisField = document.querySelector("#tetris__field");

let tetrisFieldModel = new TetrisFieldModel(10, 20);
let tetrisFieldView = new TetrisFieldView(tetrisField, tetrisFieldModel);

let tetrisShapeModel = new TetrisShapeModel();


// tetrisFieldView.createTetrisField(); 
tetrisShapeModel.setShapeInField(tetrisFieldModel.getField());

let timer = setInterval( () => {
    tetrisShapeModel.moveShape(tetrisFieldModel.getField());
    tetrisFieldView.createTetrisField(); 
}, 500);
