'use strict';
var assert = require('assert');
var Cheque = require('../');

describe('ChequeTest', function () {

  it('Cheque de um real', function () {
    var um_real = new Cheque(1);
    assert(um_real.humanize(), 'um real');
  });

  it('Cheque de dois reais', function () {
    var dois_reais = new Cheque(2);
    assert(dois_reais.humanize(), 'dois reais');
  });

  it('Cheque de cinco centavos', function () {

    var cinco_centavos = new Cheque(0.05);
    assert(cinco_centavos.humanize(), 'cinco centavos');
  });

  it('Cheque de cento e vinte e dois reais', function () {
    var cento_e_vinte_e_dois_reais = new Cheque(122);
    assert(cento_e_vinte_e_dois_reais.humanize(), 'cento e vinte e dois reais');
  });

  it('Cheque de cento e quinze reais', function () {

    var cento_e_quinze_reais = new Cheque(115);
    assert(cento_e_quinze_reais.humanize(), 'cento e quinze reais');
  });

  it('Cheque de cento e um reais', function () {


    var cento_e_um_reais = new Cheque(101);
    assert(cento_e_um_reais.humanize(), 'cento e um reais');
  });

  it('Cheque de um mil reais', function () {
    var um_mil_reais = new Cheque(1000);
    assert(um_mil_reais.humanize(), 'um mil reais');
  });

});
