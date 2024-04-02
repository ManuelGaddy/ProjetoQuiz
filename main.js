const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        " var",
        " let",
        " const"
      ],
      correta: 1 // Resposta correta: b) let
    },
    {
      pergunta: "Qual é o operador usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        " ==",
        " ===",
        " ="
      ],
      correta: 1 // Resposta correta: b) ===
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        " push()",
        " pop()",
        " concat()"
      ],
      correta: 0 // Resposta correta: a) push()
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        " function minhaFuncao() {}",
        " def minhaFuncao() {}",
        " var minhaFuncao = function() {}"
      ],
      correta: 0 // Resposta correta: a) function minhaFuncao() {}
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        " Selecionar múltiplos elementos",
        " Selecionar um elemento pelo seu ID",
        " Selecionar um elemento pelo seu nome de classe"
      ],
      correta: 1 // Resposta correta: b) Selecionar um elemento pelo seu ID
    },
    {
      pergunta: "O que o método 'parseInt' faz em JavaScript?",
      respostas: [
        " Converte uma string para um número inteiro",
        " Converte um número para uma string",
        " Converte uma string para um número decimal"
      ],
      correta: 0 // Resposta correta: a) Converte uma string para um número inteiro
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        " Retorna o tipo de dados de uma variável",
        " Converte uma variável para um tipo específico",
        " Compara dois valores para igualdade de tipo e valor"
      ],
      correta: 0 // Resposta correta: a) Retorna o tipo de dados de uma variável
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas: [
        " Adiciona um ouvinte de eventos a um elemento HTML",
        " Adiciona um novo elemento ao DOM",
        " Remove um ouvinte de eventos de um elemento HTML"
      ],
      correta: 0 // Resposta correta: a) Adiciona um ouvinte de eventos a um elemento HTML
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        " <!-- Comentário -->",
        " // Comentário",
        " /* Comentário */"
      ],
      correta: 1 // Resposta correta: b) // Comentário
    },
    {
      pergunta: "Qual é a função do método 'toFixed' em JavaScript?",
      respostas: [
        " Arredonda um número para um número específico de casas decimais",
        " Retorna a parte inteira de um número",
        " Converte um número para uma string com um número específico de casas decimais"
      ],
      correta: 0 // Resposta correta: a) Arredonda um número para um número específico de casas decimais
    }
  ];
  

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostarTotal = document.querySelector('#acertos span')
mostarTotal.textContent = corretas.size + 'de' + totalDePerguntas



// loop ou laço de repetição
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta){
      corretas.add(item)
    }
    
    mostarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  }




  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()


  //cola as perguntas na tela
  quiz.appendChild(quizItem)
}
