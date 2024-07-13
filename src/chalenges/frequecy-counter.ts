/**
 * Given two strings, 
 * write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman.
 * **/

function validAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length) {
        console.log(false)
        return false;
    }

    let counter1: any = {}
    let counter2: any = {}

    for (let char of str1) {
        counter1[char] = (counter1[char] || 0) + 1
    }

    for (let char of str2) {
        counter2[char] = (counter2[char] || 0) + 1
    }

    for (let key in counter1) {
        if (!(counter2[key])) {
            console.log(false)
            return false;
        }
        if (counter1[key] !== counter2[key]) {
            console.log(false)
            return false
        }
    }

    console.log(true)
    return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true