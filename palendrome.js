const palendrome = (string) => {
    
    let formattedString = string.replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '').toLowerCase()
    let reverse = formattedString.split('').reverse().join('')

    if (formattedString === reverse) {
        console.log(`"${string}" is a palendrome.`)
    }else{
        console.log(`"${string}" is not a palendrome.`)
    }

}

palendrome('dogs')
palendrome("Go hang a salami I'm a lasagna hog")
palendrome('racecar')
palendrome('o stone, be not so')
palendrome('a dog, a panic, in a pagoda')