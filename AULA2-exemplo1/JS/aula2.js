function adicionarTarefa() { 
            //A primeira linha se trata de uma função, qunadoa  função é chamada, todo nosso código a baixo é executado em ordem.
      let mensagem = "Tarefa adicionada com sucesso!"

      let inputTarefa = document.getElementById("inputTarefa")
      //A primeira coisa que acontece é que estamos buscando no nosso documento HTML um elemento com o id inputTarefa, que no caso é o nosso input mesmo.
      let tarefa = inputTarefa.value
      //Pegamos o elemento do HTMl input e colocamos dentro da variavel a cima, pegamos esse inputTarefa e pegamos o valor dele input, ou seja, tudo oque o usuario digitar dentro do inputTarefa
      if(tarefa === "") {
            alert("Adicone uma tarefa");
            return; //interronpe a operação se tiver vazio
      }
      else{
      document.getElementById ("mensagem").textContent = mensagem;

      let listaTarefas = document.getElementById("listaTarefas")
      //Estamos pegando tambem no nosso HTMl o elemento UL com o getElementById("listaTarefas"), e agente coloca dentro de uma variavel, pelo fato de querer inserir LI's dentro dessa variavel
      let novaTarefa = document.createElement("li")
      //Aqui seria a criação dos li com o createElement e colocamos esse elemento dentro de uma variavel

      novaTarefa.textContent = tarefa
      //Aqui estamos colocando para nosso elemento li o valor da nossa tarefa, ou seja, do nosso input. Ele vai pegar o valor da tarefa lá em cima na variavel tarefa.

      listaTarefas.appendChild(novaTarefa)
      //Por fim a gente pega o elemento ul e damos um appendChild, adiciona um elemento filho, que seria para o usuario poder adicionar uma nova tarefa. 

      inputTarefa.value = ""
      }
}

//O if quer dizer que "se" a tarefa for igual a (campo vazio) ele retorna uma mensagem para o usuario dizendo que é necessario adicionar uma tarefa, e o return serve para voltar ao começo do código.

//Tem o Else tambem que significa que (senão) estiver vazio, ele executa o comando que esta dentro de si.