## Objeto Moeda

# Instruções

Hoje você irá praticar o que leu sobre **[objetos JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)**. O objeto moeda irá representar se a jogada de uma moeda cai do lado cara ou coroa. Você irá adicionar vários _métodos_ **(um método é uma função que é uma propriedade de um objeto)** a ele para auxiliar na jogada da moeda e mostrar qual lado está sendo exibido.

Crie um diretório chamado 'coinObject', e um arquivo JS chamado coinObject.js. **É importante seguir as instruções para os nomes, ou então as ferramentas de teste/avaliação não funcionarão.**

### Configurando o objeto moeda

- Comece seguindo o template abaixo, complete as partes faltantes ou incompletas do código indicadas nos comentários:

```js
const coin = {
  state: 0,

  flip: function () {
    // Use "this.state" para acessar a propriedade "state".
    // Configure de forma randômica a propriedade “state” do
    // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
  },

  toString: function () {
    // Se o valor de "state" for 0, retorne "Heads"
    // Se o valor de "state" for 1, retorne "Tails"
  },

  toHTML: function () {
    const image = document.createElement("img");
    // Colocar uma imagem correspondente a essa valor.
    // image.src = "./CAMINHO/IMAGEM.JPEG"
    // image.alt = "Heads/Tails"
    return image;
  },
};
```

### Hora de jogar a moeda

- Utilize o objeto moeda e seus métodos para completar o código abaixo:
- **Obs**: As duas funções são independentes, o resultado de uma não deve afetar a outra.

```js
function display20Flips() {
  const results = [];
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
}

function display20Images() {
  const results = [];
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
}
```

### Dicas

Observe que você precisará fazer o download ou criar as imagens para exibir os lados da moeda para o método toHTML. Crie uma pasta chamada _images_ em seu repositório para armazená-las.

Observe também que, por convenção, o método toString() de um objeto deve sempre retornar uma string que representa o objeto. Este valor de retorno pode então ser usado em qualquer output de depuração de erros que você possa precisar fazer. Mais para frente, isso será uma convenção útil para se seguir. Entretanto, um método toString() não deve produzir diretamente qualquer output visual por si só; ou seja, ele não deve realizar um console.log() por conta própria, por exemplo: ele deve apenas retornar a string.

### Antes de enviar

Teste e demonstre que seu objeto moeda está completo fazendo o seguinte:

- **_Um ponto:_** Escreva uma função chamada **_display20Flips_** que usa um loop para jogar a moeda 20 vezes. Cada vez que a moeda for jogada, exiba o resultado em forma de string na página (use o método toString()) e também envie o resultado para o array 'results'. Depois que seu loop estiver completo, **retorne o array results**.

- **_Um ponto:_** Escreva uma função chamada **_display20Images_**, novamente usando um loop para jogar a moeda 20 vezes, mas desta vez, em vez de exibir o resultado como uma string, exiba-o como um elemento HTML IMG na página (use o método toHTML()). Também **envie cada resultado para o array 'results' e retorne-o depois de completar o loop**.

### Atenção

- Seu arquivo HTML n**ão deve ter mais nada no corpo, exceto sua tag script**. Em vez de fazer o hardcode dos elementos HTML, **crie-os dinamicamente com Javascript e faça o append deles em seu HTML**.

### Envio

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. no GitLab, por favor, adicione ka-br-correcoes como membro do seu projeto com a permissão "Reporter", e **envie a url de seu gitlab pages (Ex: https://nomedeusuário.gitlab.io/coinObject) _E_ a url de seu repositório gitlab (Ex: https://gitlab.com/nomedeusuário/coinObject). Você pode enviar a url de seu repo como comentário do seu envio principal no Canvas.**
