// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite a altura do retângulo')
  const largura = prompt('Digite a largura do retângulo')
  const area = altura * largura
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite o ano de seu nascimento')
  const idade = anoAtual - anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome!')
  const idade = prompt('Digite a sua idade!')
  const email = prompt('Digite o seu e-mail!')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Informe sua primeira cor favorita')
  const corFavorita2 = prompt('Informe sua segunda cor favorita')
  const corFavorita3 = prompt('Informe sua terceira cor favorita')
  const resposta = [corFavorita1, corFavorita2, corFavorita3]
  console.log(resposta)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const mensagem = string
  return mensagem.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoEspetaculo = custo
  const custoIngressos = valorIngresso
  const resultado = custoEspetaculo / custoIngressos
  return resultado
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const texto1 = string1
  const texto2 = string2
  const comparaTamanho = string1 >= string2
  return comparaTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array1 = array
  return array1[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const array1 = array
  console.log(array1[array1.length - 1])
  return array1[array1.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroIndice = array[0]
  const ultimoIndice = array[array.length - 1]

  array[0] = ultimoIndice
  array[array.length - 1] = primeiroIndice

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const primeiraString = string1
  const segundaString = string2
  const compara = primeiraString.toUpperCase() === segundaString.toUpperCase()
  return compara
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano Atual")
  const anoDeNascimento = prompt("Digite o ano que você nasceu")
  const anoEmissaoIdentidade = prompt("Digite o ano que sua identidade foi emitida")


  const idade = anoAtual - anoDeNascimento
  const renovar = (idade <= 20 && anoAtual - anoEmissaoIdentidade >= 5) ||
    (idade > 20 && idade <= 50 && anoAtual - anoEmissaoIdentidade >= 10) ||
    (idade > 50 && anoAtual - anoEmissaoIdentidade >= 15)
  console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto400 = ano % 400 === 0
  const anoBissexto4 = ano % 4 === 0
  const anoNaoBissexto = ano % 100 === 0

  const resultado = (anoBissexto400 || (anoBissexto4 && !anoNaoBissexto))
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt("Você tem mais de 18 anos?") 
  const ensinoMedio = prompt("Você possui ensino médio completo?")  
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") 

  const comparaMaioridade = maiorIdade === "sim"
  const comparaEnsinoMedio = ensinoMedio === "sim"
  const comparaDisponibilidade= disponibilidade === "sim"

  console.log(comparaMaioridade && comparaEnsinoMedio && comparaDisponibilidade)
}