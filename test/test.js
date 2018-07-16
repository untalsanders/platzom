const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation = platzom('Programar')
        expect(translation).to.equal('Program')
    })

    it('Si la palabra inica con Z, se le añade "pe" al final', function () {
        const translation1 = platzom('Zorro')
        const translation2 = platzom('Zarpar')
        expect(translation1).to.equal('Zorrope')
        expect(translation2).to.equal('Zarppe')
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const translation1 = platzom('Abecedario')
        const translation2 = platzom('Paranganicutirimicuaro')
        expect(translation1).to.equal('Abece-dario')
        expect(translation2).to.equal('Paranganicu-tirimicuaro')
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y devuelve la misma palabra pero intercalando letras mayúsculas y  minúsculas.', function () {
        const translation = platzom('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })
})
