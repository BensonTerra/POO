isAPalindrome = (num) => {
    if (String(num).length === 3 && String(num)[0] == String(num)[2]){
        return true
    } else {
        return false
    }
}
console.log(isAPalindrome(212))