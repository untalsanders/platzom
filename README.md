# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del Idioma

-   Si la palabra termina con "ar", se le quitan esas dos letras
-   Si la palabra inica con Z, se le añade "pe" al final
-   Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
-   Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y devuelve la misma palabra
    pero intercalando letras mayúsculas y minúsculas.

## Instalación

```bash
npm install @sandersgutierrez/platzom
```

## Uso

```javascript
const platzom = require('@sandersgutierrez/platzom')

platzom('Programar')
// output: 'Program'

platzom('Zorro')
// output: 'Zorrope'

platzom('Zarpar')
// output: 'Zarppe'

platzom('Abecedario')
// output: 'abece-dario'

platzom('sometemos')
// output: 'sometemos'
```

## Créditos

-   [Sanders Gutiérrez](https://sandersgutierrez.github.io)

## License

[MIT](https://opensource.org/licenses/MIT)
