'use strict';

function Cheque(valor) {

  var palavras = {
    1   : 'um',
    2   : 'dois',
    3   : 'tres',
    4   : 'quatro',
    5   : 'cinco',
    6   : 'seis',
    7   : 'sete',
    8   : 'oito',
    9   : 'nove',
    10  : 'dez',
    11  : 'onze',
    12  : 'doze',
    13  : 'treze',
    14  : 'quatorze',
    15  : 'quinze',
    16  : 'dezesseis',
    17  : 'dezessete',
    18  : 'dezoito',
    19  : 'dezenove',
    20  : 'vinte',
    30  : 'trinta',
    40  : 'quarenta',
    50  : 'cinquenta',
    60  : 'sessenta',
    70  : 'setenta',
    80  : 'oitenta',
    90  : 'noventa',
    100 : 'cento',
    200 : 'duzentos',
    300 : 'trezentos',
    400 : 'quatrocentos',
    500 : 'quinhentos',
    600 : 'seicentos',
    700 : 'setecentos',
    800 : 'oitocentos',
    900 : 'novecentos'
  };

  // coisa de javeiro
  var PRIVATE = {};
  var PUBLIC = this;
  // fim de coisa de javeiro

  PRIVATE.humanizedDezena = function (value) {
    if (value <= 20 || (value % 10) === 0) {
      return palavras[value];
    }

    var parteUnidade = value % 10;
    var parteDezena  = value - parteUnidade;

    var humanizedUnidade = palavras[parteUnidade];
    var humanizedDezena  = palavras[parteDezena];

    return humanizedDezena + ' e ' + humanizedUnidade;
  };

  PRIVATE.humanizedCentena = function (value) {
    var parteDezena = value % 10;
    var parteCentena  = value - parteDezena;

    if (value === 100 && parteDezena === 0) {
      return 'cem';
    }

    return palavras[parteCentena] + ' e ' + PRIVATE.humanizedDezena(parteDezena);
  };

  PRIVATE.convertToExtensive = function (value) {
    var tamanho = value.length;

    if (tamanho <= 2) {
      return PRIVATE.humanizedDezena(value);
    }

    if (tamanho === 3) {
      return PRIVATE.humanizedCentena(value);
    }

    if (tamanho >= 4) {
      var parteMilhar  = value / 1000;
      var parteCentena = value % 1000;

      var humanizedMilhar = (parteMilhar !== 1) ? (PRIVATE.convertToExtensive(parteMilhar) + 'mil') : 'mil';

      if (parteCentena > 0) {
        return humanizedMilhar + ', ' + PRIVATE.humanizedCentena(parteCentena);
      }

      return humanizedMilhar;
    }
  };

  PUBLIC.humanize = function () {
    var valor = PUBLIC.valor;
    var parteInteira = parseInt(valor);
    var reais = (parteInteira > 0) ? ( + (PRIVATE.convertToExtensive(parteInteira) +  (parteInteira !== 1) ? ' reais': ' real')) : '';

    var parteFracionaria = (valor % 1) * 100;
    var centavos = (parteFracionaria > 0) ? (" e " + PRIVATE.convertToExtensive(parteFracionaria) +  ' centavos') : '';

    return reais + centavos;
  };

  PUBLIC.valor = valor;

  return PUBLIC;
}

module.exports = Cheque;
