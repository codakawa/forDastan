const poems = ['Мороз', 'и', 'солнце', 'день', 'чудесный']

const userNum = Number(prompt("Num? (1-5)"))
const newWord = prompt('New word?')

poems.splice(userNum-1, 1, newWord);

console.log(poems);