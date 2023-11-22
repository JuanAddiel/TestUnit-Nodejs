const index = require('./index');
test('Comprobacion del mensaje de saludo',()=>{
    expect(index()).toBe("Hello World!");
})