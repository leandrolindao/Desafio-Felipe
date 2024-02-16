//Variaveis
let nome = "Leando";//Entrada nome do Heroi
let xp = 10500;//Entrada nivel de xp do heroi
let inicio = "Ferro" //Entrada nivel inicial do xp

//Estrutura de repetição para identificar qual o nivel de experiência do Heroi
for(let i=0;i<10000;i++){
  let nivel;   
  switch (true) {
    case xp < 1000:
      nivel = "Ferro";
      break;
      case xp >= 1000 && xp  <= 2000:
      nivel = "Bronze";
      break;
      case xp  >= 2001 && xp  <= 5000:
      nivel = "Prata";
      break;
      case xp >= 5001 && xp<= 7000:
      nivel = "Ouro";
      break;
      case xp >= 7001 && xp <= 8000:
      nivel = "Platina";
      break;
      case xp >= 8001 && xp <= 9000:
      nivel = "Ascendente";
      break;
      case xp >= 9001 && xp <= 10000:
      nivel = "Imortal";
      break;
      default:
      nivel = "Radiante";
}
//Passa qual é o nivel
inicio = nivel
}
//Mensagem de saida 
console.log("O Herói de nome "+nome+" está no nível de " +inicio);