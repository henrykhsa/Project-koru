import { saudacao } from './utils.js';
import { somar } from './calculos.js';
import multiplicar from './calculos.js';
import _ from 'lodash';

console.log(saudacao("Henry"));
console.log(somar(5, 3));
console.log(multiplicar(4, 10));

const numeros = [1, 2, 3, 4, 5];
const numerosEmbaralhados = _.shuffle(numeros);
console.log("numeros: ", numeros);
console.log("numerosEmbaralhados: ", numerosEmbaralhados);
