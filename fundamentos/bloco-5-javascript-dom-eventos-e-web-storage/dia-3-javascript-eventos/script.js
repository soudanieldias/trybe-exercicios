function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // 01. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

  // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criaDiasDoMes() {
    let listaDosDias = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index +=1) {
      let diaInput = dezDaysList[index];

      // ESTRUTURA DEFAULT PARA INJETAR DIA DO ARRAY NA LISTA days
      // let elementoDia = document.createElement('li');
      // elementoDia.className = 'day';
      // elementoDia.innerHTML = diaInput;
      // listaDosDias.appendChild(elementoDia);

      // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday
      if (diaInput === 24 || diaInput === 31) {
        let elementoDia = document.createElement('li');
        elementoDia.className = 'day holiday';
        elementoDia.innerHTML = diaInput;
        listaDosDias.appendChild(elementoDia);

        // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday .
      } else if (diaInput === 4 || diaInput === 11 || diaInput === 18) {
        
        let elementoDia = document.createElement('li');
        elementoDia.className = 'day friday';
        elementoDia.innerHTML = diaInput;
        listaDosDias.appendChild(elementoDia);
      } else if (diaInput === 25){
        let elementoDia = document.createElement('li');
        elementoDia.className = 'day holiday friday';
        elementoDia.innerHTML = diaInput;
        listaDosDias.appendChild(elementoDia);
      } else {
        let elementoDia = document.createElement('li');
        elementoDia.className = 'day';
        elementoDia.innerHTML = diaInput;
        listaDosDias.appendChild(elementoDia);
      }
    };
  };
  criaDiasDoMes();

// 02. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

//  Adicione a este botão a ID "btn-holiday" .
//  Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

  function criarBotao(nomeBotao) {
    let buttonContainer = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    let idBotao = "btn-holiday";

    novoBotao.id = idBotao;
    novoBotao.innerHTML = nomeBotao;
    buttonContainer.appendChild(novoBotao);
  };
  criarBotao("Feriado");

  // 03. Implemente uma função que adicione ao botão "Feriados" um evento de "click"
  // que muda a cor de fundo dos dias que possuem a classe "holiday".

  function mostraFeriados () {
    let botaoFeriado = document.querySelector('#btn-holiday');
    let feriadosCalendario = document.querySelectorAll('.holiday');
    let corAntiga = "rgb(50, 50, 50)";
    let corNova = "white";

    botaoFeriado.addEventListener('click', function() {
      for (let index = 0; index < feriadosCalendario.length; index += 1) {
        // console.log(feriadosCalendario[index].innerHTML); // DEBUG
        if (feriadosCalendario[index].style.backgroundColor === corNova) {
          feriadosCalendario[index].style.backgroundColor = corAntiga;

        } else {
          feriadosCalendario[index].style.backgroundColor = corNova;

        }
      }
    });
  };
  mostraFeriados();
  
  // 04. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

  // Adicione a este botão o ID "btn-friday" .
  // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function itsFriday (stringButton) {
    let buttonContainer = document.querySelector('.buttons-container');
    let botaoFriday = document.createElement('button');
    let idBotao = "btn-friday";

    botaoFriday.id = idBotao;
    botaoFriday.innerHTML = stringButton;
    buttonContainer.appendChild(botaoFriday);

  };
itsFriday("Sexta-feira");

// 05. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

  function showFriday (arraySexta) {
    let botaoFriday = document.querySelector('#btn-friday');
    let sextaCalendario = document.getElementsByClassName('friday');
    let novoTextoFriday = "SEXTOU!!!";

    botaoFriday.addEventListener('click', function() {

      for (let index = 0; index < sextaCalendario.length; index += 1) {
        
        if (sextaCalendario[index].innerHTML !== novoTextoFriday) {
          sextaCalendario[index].innerHTML = novoTextoFriday;
        } else {
          sextaCalendario[index].innerHTML = arraySexta[index];
        }
      }
    });
  };
  let dezFridays = [ 4, 11, 18, 25 ];
  showFriday(dezFridays);

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário,
// o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

  function zoomInDiaMes() {
    let elementoDia = document.querySelector("#days");
    elementoDia.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
    elementoDia.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  };
  zoomInDiaMes();

  // function zoomOutDiaMes () {
    // let elementoDia = document.querySelector("#days");
    // elementoDia.addEventListener('mouseout', function(event) {
    //   event.target.style.fontSize = '20px';
    //   event.target.style.fontWeight = '200';
    // })
  // }
  // zoomOutDiaMes();

  // 07. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber
  // como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento
  // com a tag <span> contendo a tarefa.
  // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

  function adicionaTarefa(nomeTarefa) {
    let listaTarefas = document.querySelector(".my-tasks");
    let novaTarefa = document.createElement('span');
    novaTarefa.innerText = nomeTarefa;
    listaTarefas.appendChild(novaTarefa);
  };
  adicionaTarefa("Cozinhar");

  // 08.  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.
  // Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
  // O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

  function adicionaCor(color) {
    let listaTarefas = document.querySelector(".my-tasks");
    let divColorida = document.createElement('div');
    divColorida.className = "task";
    divColorida.style.backgroundColor = color;
    divColorida.innerHTML = " ";

    listaTarefas.appendChild(divColorida);

  };
  adicionaCor("red");
  
  // 09. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa,
  // atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
  // Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está
  // deixando de ser uma tarefa selecionada.

  function alteraClasse() {
    let tarefaSelecionada = document.getElementsByClassName('task selected');
    let minhaTarefa = document.querySelector('.task');
  
    minhaTarefa.addEventListener('click', function(event) {
      if (tarefaSelecionada.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  alteraClasse();