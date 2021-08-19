const texto = document.createElement("p");
texto.id ="escreveVence";
document.body.appendChild(texto);

const texto2 = document.createElement("p");
texto2.id ="rodada";
document.body.appendChild(texto2);

const botaoJogarInicio =document.createElement("button");
botaoJogarInicio.id ='jogar'
botaoJogarInicio.innerHTML="jogar moedas um total de 20 vezes";
document.body.appendChild(botaoJogarInicio);
const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.      
      
      let valorMaximo =Math.floor(1);
      let valorMinimo =Math.ceil(0);
      coin.state = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
      return coin.state ;
    },
    
    toString: function () {
    let  status = coin.flip();
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if(status===0){
        return "Heads"
      }else if(status===1){
        return "Tails";
      }
    },
  
    toHTML: function (statusCaraCoroa) {
     
      const image = document.createElement("img");
      image.id = "moeda"
      // Colocar uma imagem correspondente a essa valor.
      if(statusCaraCoroa==="Heads"){
        image.src = "./imagens/cara.jpg";
      //  image.alt = "./imagens/coroa.jpg"

      }else if(statusCaraCoroa==="Tails"){
        image.src = "./imagens/coroa.jpg";
      //  image.alt = "./imagens/cara.jpg"
      }
   
      return image;
    },
  
  };

  function display20Flips() {
    
    
    const results = [];
    let contaCara =0;
    let contaCoroa=0;

 
    for(let contador= 0;contador<20;contador++){
      results[contador]= coin.toString();
      console.log(results[contador]);
      if(results[contador]==="Heads"){
        contaCara++;
      }else if(results[contador]==="Tails"){
        contaCoroa++;
      }
    
    }


    if(contaCara>contaCoroa){
      texto.innerHTML = "vencedor foi quem escolheu cara com um total de: "+contaCara
    } else if(contaCoroa>contaCara){
      texto.innerHTML = "O vencedor foi quem escolheu coroa com um total de: "+contaCoroa
    }else if(contaCoroa===contaCara){
      texto.innerHTML = "Deu empate ambos tiraram 10"
    }

    texto2.innerHTML ="Nesta rodada tivemos: "+results
  return results;
  }
  


  botaoJogarInicio.addEventListener('click',function display20Images() {
    document.body.appendChild(botaoJogarInicio);
    document.getElementById('jogar').remove()
    let valorMoeda = display20Flips();
    let results = [];
    let localMoedas =document.createElement("section");
      localMoedas.id="moedasLocal";
      document.body.appendChild(localMoedas);


    for(let contadorImagem= 0;contadorImagem<20;contadorImagem++){
      results[contadorImagem]= coin.toHTML(valorMoeda[contadorImagem])
      localMoedas.appendChild(results[contadorImagem]);
    }    
    
   
    let botaoJogarDeNovo =document.createElement("button");
    botaoJogarDeNovo.id ='jogarnovo'
    botaoJogarDeNovo.innerHTML="jogar moedas Novamente";
    document.body.appendChild(botaoJogarDeNovo);
    botaoJogarDeNovo.addEventListener('click',function(){
      document.body.removeChild(localMoedas)
      document.body.removeChild(botaoJogarDeNovo);
      display20Images();
    })
    return results;
  });