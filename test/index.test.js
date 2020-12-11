const expect = require('chai').expect
const platzom = require('../src')

describe('#platzom', () => {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', () => {
        expect(platzom('Programar')).to.equal('Program')
    })

    it('Si la palabra inica con Z, se le añade "pe" al final', () => {
        expect(platzom('Zorro')).to.equal('Zorrope')
        expect(platzom('Zarpar')).to.equal('Zarppe')
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', () => {
        expect(platzom('Abecedario')).to.equal('Abece-dario')
        expect(platzom('Paranganicutirimicuaro')).to.equal('Paranganicu-tirimicuaro')
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y devuelve la misma palabra pero intercalando letras mayúsculas y  minúsculas.', () => {
        expect(platzom('sometemos')).to.equal('SoMeTeMoS')
    })
})
