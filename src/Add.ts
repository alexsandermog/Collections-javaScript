import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function addToList(list) {
    const position = list.length;
    const item = prompt('Digite o novo item da lista: ');
    list[position] = item;
    console.log(`\n${item} Foi adicionado na lista!`);
}

export { addToList }