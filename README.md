## Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo de uma todo list](./todo-list-example.gif)


## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀Observações importantes:

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

## Requisitos Obrigatórios:

### 1 - Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag `<header>`. Esse título não varia de acordo com o conteúdo da lista. _Não confunda esse título com o título da página, que deve aparecer dentro da tag `head`_.
##### As seguintes verificações serão feitas:

- Será verificado se sua página possui uma tag `header` com o conteúdo `Minha Lista de Tarefas`

### 2 - Abaixo do título deve haver um pequeno e discreto parágrafo com `id="funcionamento"` e com o texto "Clique duas vezes em um item para marcá-lo como completo" explicando o funcionamento da lista para o usuário.
##### As seguintes verificações serão feitas:

- Será verificado que existe na sua página um elemento com o id `funcionamento` com o conteúdo `Clique duas vezes em um item para marcá-lo como completo`

### 3 - Deve haver um `input` com o `id="texto-tarefa"` onde o usuário poderá digitar o nome do item que deseja adicionar à lista.
##### As seguintes verificações serão feitas:

- Será verificada a existência de um elemento do tipo `input` com o id `texto-tarefa`.

### 4 - Deve haver uma lista ordenada de tarefas com o `id="lista-tarefas"`.
##### As seguintes verificações serão feitas:

- Será verificada a existência de um elemento `ol` com o id `lista-tarefas`.

### 5 - Deve haver um botão com `id="criar-tarefa"` e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
##### As seguintes verificações serão feitas:

- Será verificada a existência de um elemento do tipo `button` com o id `criar-tarefa`
- No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

### 6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.
##### As seguintes verificações serão feitas:

- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

### 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
##### As seguintes verificações serão feitas:

- Será verificado que, ao se carregar a página, os itens da lista **não tem** o estilo CSS `background-color: rgb(128, 128, 128)`
- Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)`

### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
##### As seguintes verificações serão feitas:

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.

### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

##### As seguintes verificações serão feitas:

- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`.
- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`
- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo

### 10 - Deve haver um botão com `id="apaga-tudo"` que quando clicado deve apagar todos os items da lista.
##### As seguintes verificações serão feitas:

- Será verificado que existe um elemento `button` com o id `apaga-tudo`
- Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

### 11 - Deve haver um botão com `id="remover-finalizados"` que quando clicado remove **somente** os elementos finalizados da sua lista.
##### As seguintes verificações serão feitas:

- Será verificado que existe um elemento `button` com o id `remover-finalizados`
- Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

## BÔNUS

### 12 - Adicione um botão com `id="salvar-tarefas"` que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
##### As seguintes verificações serão feitas:

- Será verificado que existe um elemento `button` com o id `salvar-tarefas`
- Será verificado que, quando a lista tem vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

### 13 - Adicione dois botões, um com `id="mover-cima"` e outro com `id="mover-baixo"`, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.

    Pontos importantes sobre este requisito bônus:

    * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

    * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

##### As seguintes verificações serão feitas:

- Será verificada a existência de dois elementos `button`, um com o id `mover-cima` e o outro com o id `mover-baixo`
- Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas
- Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento
- Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista
- Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido
- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada

### 14 - Adicione um botão com `id="remover-selecionado"` que, quando clicado, remove o item selecionado.
##### As seguintes verificações serão feitas:

- Será verificada a presença de um elemento `button` com um id `remover-selecionado`
- Será verificado que, no clicar no botão, somente o elemento selecionado é removido

---

## Dicas

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/todo-list`.

- **Lembre-se:** tirar 100% do avaliador não é o fim do trabalho! Customize-o, estilize-o, acrescente-o ao seu portfólio!

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-07`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
