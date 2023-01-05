import platzom from '../src'

test('Si la palabra termina con "ar", se le quitan esas dos letras', () => {
    expect(platzom('Programar')).toEqual('Program')
})

test('Si la palabra inica con Z, se le añade "pe" al final', () => {
    expect(platzom('Zorro')).toEqual('Zorrope')
    expect(platzom('Zarpar')).toEqual('Zarppe')
})

test('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', () => {
    expect(platzom('Abecedario')).toEqual('Abece-dario')
    expect(platzom('Paranganicutirimicuaro')).toEqual('Paranganicu-tirimicuaro')
})

test('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y devuelve la misma palabra pero intercalando letras mayúsculas y  minúsculas.', () => {
    expect(platzom('sometemos')).toEqual('SoMeTeMoS')
})
