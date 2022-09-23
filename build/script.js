"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var PromptSync = require("prompt-sync");
var Add_1 = require("./Add");
var Mostrar_1 = require("./Mostrar");
var Remover_1 = require("./Remover");
var prompt = PromptSync();
var list = [];
var option = 0;
do {
    console.clear();
    (0, Menu_1.mostraMenu)();
    console.log();
    option = Number(prompt('Escolha uma opção: '));
    switch (option) {
        case 1:
            (0, Add_1.addToList)(list);
            break;
        case 2:
            (0, Remover_1.Remover)(list);
            break;
        case 3:
            (0, Mostrar_1.Mostrar)(list);
            (0, Remover_1.Remover)(list);
            (0, Add_1.addToList)(list);
            break;
        case 4:
            (0, Mostrar_1.Mostrar)(list);
            break;
        case 5:
            console.log('Finalizando a aplicação!');
        default:
            console.log('Opção inválida!');
            break;
    }
    prompt('Pressione ENTER para continuar...');
} while (option != 5);
