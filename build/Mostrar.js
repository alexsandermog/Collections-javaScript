"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mostrar = void 0;
function Mostrar(list) {
    console.log('--- Listagem completa do estoque ---\n');
    for (var i = 0; i < list.length; i++) {
        console.log("".concat(i + 1, " - ").concat(list[i]));
    }
}
exports.Mostrar = Mostrar;
