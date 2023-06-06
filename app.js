const poems = ['Мороз', 'и', 'солнце', 'день', 'чудесный']

const userNum = Number(prompt("Num? (1-5)"))
const newWord = prompt('New word?')

// let newPoems = poems.filter((el) => el !== poems[userNum-1])
poems.splice(userNum-1, 1, newWord);

console.log(poems);