function generatePassword(options) {
  // define varibles user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // remove things user don't need
  if (options.excludeCharacters) {
    collection = collection.filter(item => !options.excludeCharacters.includes(item))
  }
  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }
  // start generating password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }
  // return the generated password
  return password
}

// define sample function to ramdomly return a item to array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = generatePassword
