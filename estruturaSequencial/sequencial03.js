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
const VALOR_DO_LITRO_DA_LATA = VALOR_DA_LATA / QUANTIDADE_DA_LATA

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