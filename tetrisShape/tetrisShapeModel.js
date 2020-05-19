"use strict";

export class TetrisShapeModel {
    constructor() {
        this.shapes = {
            O: [[1, 1],
                [1, 1]],
            Z: [[1, 1, 0],
                [0, 1, 1],
                [0, 0, 0]],
            S: [[0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]],
            T: [[1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]],
            L: [[0, 1, 0],
                [0, 1, 0],
                [0, 1, 1]],
            J: [[0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]],
            I: [[0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]],
        };
    }

    getShape() {
        let nameShapes = "OZSTLJI";
        let random = Math.floor(Math.random() * 7);
        return {x: 0,
                y: 0,
                shape: this.shapes[nameShapes[random]]};
    }

    setShapeInField(field) {
        let shape = this.getShape();
        let middleField = Math.floor((field[0].length - shape.shape[0].length)/2);
        let middle = middleField;
        shape.x = middleField;
        for (let y = 0; y < shape.shape.length; y++) {
            for ( let x = 0; x < shape.shape[y].length; x++) {
                field[y][middle + x] = shape.shape[y][x];
            }
            middle = middleField;
        }
    }

    moveShape(field) {
        for (let y = field.length-1; y >= 0; y--) {
            for ( let x = field[y].length-1; x >= 0; x--) {
                if(field[y][x] === 1) {
                    if (field[y + 1] === undefined || field[y + 1][x] === 2) {
                        field[y][x] = 2;
                    } else {
                        field[y + 1][x] = 1;
                        field[y][x] = 0;
                    } 
                }
            }
        }
    }
}