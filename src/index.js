'use strict'

export default function platzom(str) {
    let translation = str

    /*
     * Si la palabra termina con "ar", se le quitan esas dos letras
     */
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }

    /*
     * Si la palabra inicia con Z, se le añade "pe" al final.
     */
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    /*
     * Si la palabra traducida tiene 10 o más letras,
     * se debe partir en dos por la mitad y unir con un guión medio
     */
    const length = translation.length
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2))
        const secondtHalf = translation.slice(Math.round(length / 2))
        translation = `${firstHalf}-${secondtHalf}`
    }

    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }

        return translation
    }

    function reverse(str) {
        return str.split('').reverse().join('')
    }

    /*
     * Por último, si la palabra original es un palíndromo,
     * ninguna regla anterior cuenta y se devuelve la misma palabra pero
     * intercalando letras mayúsculas y minúsculas
     */
    if (str == reverse(str)) {
        return minMay(str)
    }

    return translation
}
