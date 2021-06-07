const tabuadaController = require('./tabuada');
const sinon = require('sinon');

describe('tabuada controller', () => {
  it('list', () => {
    const numeros = [];
    for (let i = 0; i <= 100; i++) {
      numeros.push(i);
    }
    let res = {
      render: function () {},
    };
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('tabuada/list', { numeros });
    tabuadaController.list({}, res);
  });
});
//14:09