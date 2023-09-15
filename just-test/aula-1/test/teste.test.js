const { subtraiNumeros } = require('../index');

test('A função deve subtrair dois números' , ()=>{
    const esperado = 15;
    const retornado = subtraiNumeros(20 , 5);

    expect(retornado).toBe(esperado);

})


// ----------------------------------------------------------------------


const { somaNumeros } = require('../index');

test('A função deve soma dois númeos' , ()=>{
    const esperado = 1000;
    const retornado = somaNumeros (800 , 200);

    expect(retornado).toBe(esperado);

})