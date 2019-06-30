console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.16]-----------------------------------------------------------------");
// 1.16 Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho
// em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é
// de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18
// litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a
// serem compradas e o preço total.


// 1 lata = 18 litros = custa $80 cada
// 1 litro = 3 metros pintados

const VALOR_DA_LATA = 80
const QUANTIDADE_DA_LATA = 18
const VALOR_DO_LITRO = VALOR_DA_LATA / QUANTIDADE_DA_LATA

const LITRO = 1
const METROS_POR_CADA_LITRO = 3
const COBERTURA_DA_TINTA = LITRO * METROS_POR_CADA_LITRO

const lojaDeTintas = (area) => {

  const quantidade_de_litros_a_comprar = area * COBERTURA_DA_TINTA
  const quantidade_de_latas_a_comprar = quantidade_de_litros_a_comprar / QUANTIDADE_DA_LATA
  const preco_total_a_pagar = quantidade_de_latas_a_comprar * VALOR_DA_LATA

  return `Serão ${quantidade_de_latas_a_comprar} latas de tinta a serem compradas no valor total de $${preco_total_a_pagar}`
}

console.log(lojaDeTintas(30)); // 30m >>> 5 latas = $400



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.17]-----------------------------------------------------------------");
// 1.17 Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho
// em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é
// de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18
// litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:

// * a. comprar apenas latas de 18 litros;
// * b. comprar apenas galões de 3,6 litros;
// * c. misturar latas e galões, de forma que o preço seja o menor.

// Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

const VALOR_POR_LATA = 80
const LITROS_POR_LATA = 18
const VALOR_DO_LITRO_DA_LATA = VALOR_POR_LATA / LITROS_POR_LATA

const VALOR_POR_GALAO = 25
const LITROS_POR_GALAO = 3.6
const VALOR_DO_LITRO_DO_GALAO = VALOR_POR_GALAO / LITROS_POR_GALAO

const UM_LITRO = 1
const METRO_POR_UM_LITRO = 6
const COBERTURA = UM_LITRO * METRO_POR_UM_LITRO


const compraDeTintas = (area) => {

  const quantidade_de_litros_a_comprar = COBERTURA * area

  const quantidade_de_latas_a_comprar = quantidade_de_litros_a_comprar / LITROS_POR_LATA
  const preco_pelas_latas = quantidade_de_latas_a_comprar * VALOR_POR_LATA

  const quantidade_de_galoes_a_comprar = quantidade_de_litros_a_comprar / LITROS_POR_GALAO
  const preco_pelos_galoes = quantidade_de_galoes_a_comprar * VALOR_POR_GALAO

  return `
    a. Apenas latas, total de $${preco_pelas_latas}.
    b. Apenas galoes, total de $${preco_pelos_galoes}.
  `
};

console.log(compraDeTintas(30));



console.log("------------------------------------------------------------------------------------------");
console.log("----------[Question 1.18]-----------------------------------------------------------------");
// 1.18 Faça um programa que peça o tamanho de um arquivo para download (em MB) e
// a velocidade de um link de Internet (em Mbps), calcule e informe o tempo
// aproximado de download do arquivo usando este link (em minutos).

const downloadArquivo = (tamanho, velocidade) => {

  const convertVelocidade = velocidade / 8
  const tempo = tamanho / convertVelocidade
  const convertSegEmMin = tempo / 60

  return `Um arquivo de ${tamanho} MB levará ${convertSegEmMin.toFixed(2)} minutos para fazer download.`
}

console.log(downloadArquivo(800, 6));  // tamanho: 800 MB, velocidade: 6.0 Mbps