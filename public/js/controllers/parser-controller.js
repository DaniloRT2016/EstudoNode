// const linebyline = require('linebyline');
// var rl = linebyline('../../../games.log');

// var contJogos = 0;
// var totKills = 0;
// rl.on('line', (line, lineCount) => {
//    if(!line)return;
//    var test = line.indexOf('InitGame');
//    var testk = line.indexOf('Kill');
   
//    if(testk != -1){
//          totKills++;
//     }
    
    
//  var contador = [contJogos] [totKills] = totKills; 
//    if(test != -1){
//      contJogos++; 
     
//      console.log('Jogo: '+contJogos);
     
//      if(totKills>=0){

//         console.log('Total De Mortes : '+contador);

//      }
//      totKills = 0;
     
//     }
   
// });

angular.module('parseator').controller('ParserController', [
        '$scope', 
        '$http',
         function($scope){
            var gson = [ 
                {"game":{"total_kills":0,"players":["Isgalamido"],"kills":{}}},
                {"game":{"total_kills":11,"players":["Isgalamido","Dono da Bola","Mocinha"],"kills":{"Isgalamido":-2}}},
                {"game":{"total_kills":4,"players":["Dono da Bola","Mocinha","Isgalamido","Zeh"],"kills":{"Isgalamido":1,"Zeh":null,"Dono da Bola":null}}},
                {"game":{"total_kills":105,"players":["Dono da Bola","Isgalamido","Zeh","Assasinu Credi"],"kills":{"Isgalamido":21,"Dono da Bola":14,"Zeh":20,"Assasinu Credi":14}}},
                {"game":{"total_kills":14,"players":["Dono da Bola","Isgalamido","Zeh","Assasinu Credi"],"kills":{"Isgalamido":2,"Assasinu Credi":2,"Zeh":1}}},
                {"game":{"total_kills":29,"players":["Fasano Again","Oootsimo","Isgalamido","Zeh","Dono da Bola","UnnamedPlayer","Maluquinho","Assasinu Credi","Mal"],"kills":{"Oootsimo":8,"Isgalamido":3,"Zeh":7,"Dono da Bola":2,"Maluquinho":0,"Assasinu Credi":1}}},
                {"game":{"total_kills":130,"players":["Oootsimo","Isgalamido","Zeh","Dono da Bola","Mal","Assasinu Credi","Chessus!","Chessus"],"kills":{"Zeh":11,"Dono da Bola":13,"Assasinu Credi":22,"Oootsimo":20,"Mal":-1,"Isgalamido":16}}},
                {"game":{"total_kills":89,"players":["Oootsimo","Isgalamido","Zeh","Dono da Bola","Mal","Assasinu Credi"],"kills":{"Oootsimo":17,"Isgalamido":20,"Assasinu Credi":10,"Zeh":12,"Dono da Bola":3,"Mal":-2}}},
                {"game":{"total_kills":67,"players":["Oootsimo","Isgalamido","Zeh","Dono da Bola","Mal","Assasinu Credi","Chessus!","Chessus"],"kills":{"Assasinu Credi":11,"Oootsimo":9,"Mal":4,"Dono da Bola":2,"Zeh":12,"Isgalamido":2,"Chessus":8}}},
                {"game":{"total_kills":60,"players":["Oootsimo","Dono da Bola","Zeh","Chessus","Mal","Assasinu Credi","Isgalamido"],"kills":{"Mal":1,"Assasinu Credi":3,"Dono da Bola":3,"Chessus":5,"Zeh":7,"Oootsimo":0,"Isgalamido":6}}},
                {"game":{"total_kills":20,"players":["Dono da Bola","Isgalamido","Zeh","Oootsimo","Chessus","Assasinu Credi","UnnamedPlayer","Mal"],"kills":{"Dono da Bola":1,"Isgalamido":7,"Oootsimo":4,"Assasinu Credi":null}}},
                {"game":{"total_kills":160,"players":["Isgalamido","Dono da Bola","Zeh","Oootsimo","Chessus","Assasinu Credi","Mal"],"kills":{"Dono da Bola":7,"Assasinu Credi":20,"Mal":-4,"Zeh":13,"Chessus":14,"Isgalamido":26,"Oootsimo":13}}},
                {"game":{"total_kills":6,"players":["Isgalamido","Dono da Bola","Zeh","Oootsimo","Chessus","Assasinu Credi","Mal"],"kills":{"Isgalamido":null,"Oootsimo":2,"Dono da Bola":null,"Zeh":2}}},
                {"game":{"total_kills":122,"players":["Isgalamido","Dono da Bola","Zeh","Oootsimo","Chessus","Assasinu Credi","Mal"],"kills":{"Isgalamido":22,"Chessus":7,"Mal":0,"Oootsimo":10,"Assasinu Credi":7,"Dono da Bola":2,"Zeh":5}}},
                {"game":{"total_kills":3,"players":["Zeh","Assasinu Credi","Dono da Bol","Fasano Agai","Isgalamid","Oootsim","Assasinu Cred"],"kills":{"Zeh":null}}},
                {"game":{"total_kills":0,"players":["Dono da Bol","Oootsim","Isgalamid","Assasinu Cred","Ze"],"kills":{}}},
                {"game":{"total_kills":13,"players":["Dono da Bola","Oootsimo","Isgalamido","Assasinu Credi","Zeh","UnnamedPlayer","Mal"],"kills":{"Dono da Bola":null,"Zeh":1,"Assasinu Credi":null,"Oootsimo":2,"Isgalamido":1,"Mal":null}}},
                {"game":{"total_kills":7,"players":["Dono da Bola","Oootsimo","Isgalamido","Assasinu Credi","Zeh","Mal"],"kills":{"Zeh":2,"Isgalamido":1,"Assasinu Credi":2,"Dono da Bola":null,"Mal":null}}},
                {"game":{"total_kills":95,"players":["Isgalamido","Oootsimo","Dono da Bola","Assasinu Credi","Zeh","Mal"],"kills":{"Mal":4,"Zeh":20,"Isgalamido":14,"Oootsimo":10,"Dono da Bola":15,"Assasinu Credi":9}}},
                {"game":{"total_kills":3,"players":["Isgalamido","Oootsimo","Dono da Bola","Assasinu Credi","Zeh","Mal"],"kills":{"Dono da Bola":2,"Oootsimo":1}}},
                {"game":{"total_kills":131,"players":["Isgalamido","Oootsimo","Dono da Bola","Assasinu Credi","Zeh","Mal"],"kills":{"Dono da Bola":14,"Zeh":19,"Mal":9,"Isgalamido":17,"Assasinu Credi":19,"Oootsimo":23}}}
             ];
            $scope.games = gson;
         }
      ])





