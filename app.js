const poems = ['Мороз', 'и', 'солнце', 'день', 'чудесный']

const userNum = Number(prompt("Num? (1-5)"))
const newWord = prompt('New word?')

let newPoems = poems.filter((el) => el !== poems[userNum-1])
newPoems.splice(userNum-1, 0, newWord);

console.log(newPoems);