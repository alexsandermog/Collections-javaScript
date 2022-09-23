"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remover = void 0;
var Mostrar_1 = require("./Mostrar");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Remover(list) {
    Mostrar_1.Mostrar;
    var positionText = prompt('Qual elemento você deseja remover?: ');
    var position = Number(positionText) - 1;
    list.splice(position, 1);
}
exports.Remover = Remover;
