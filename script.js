var https = require('https')
var fs = require('fs')

var file = fs.readFileSync("./json/allCards.json", "utf-8");

var cards = JSON.parse(file)

var getCardInfo = function(name, arr) {
    https.get('https://api.gwentapi.com/v0/cards?name=' + name, function(response) {
        var data = ''
        response.on('data', function (d) {
            data += d
        })
        response.on('end', function () {
            var result = JSON.parse(data);
            if (result.results[0]) {
                getCardadd(result.results[0].href, name, arr);
            } else {
                for (card in arr) {
                  if (arr[card].name == name) {
                    arr[card].link = name.split("+").join("_");
                    writeJson(JSON.stringify(arr[card]) +",");
                  }
                }
            }
            
        })    
   })
}

var getCardadd = function(link, name, arr) {
  https.get(link, function(
    response
  ) {
    var data = "";
    response.on("data", function(d) {
      data += d;
    });
    response.on("end", function() {
      var result = JSON.parse(data);
      getCardImg(result.variations[0].href, name, arr);
    });
  });
}

var getCardImg = function(link, name ,arr) {
  https.get( link, function(
    response
  ) {
    var data = "";
    response.on("data", function(d) {
      data += d;
    });
    response.on("end", function() {
      var result = JSON.parse(data);
      for(card in arr){
          if(arr[card].name == name){
                arr[card].link = result.art.thumbnailImage;
          }
      }
    });
  });
};




//getCardInfo("Geralt:+Igni", cards["gold"]);
//var names = ['bronse','silver','gold','leader']
//for(let name in names) {
//    let nameFile = names[name]
//    for (let card in cards[nameFile]) {
//      getCardInfo(cards[nameFile][card].name, cards[nameFile]);
//    }
//}
    for (card in cards['bronse']) {
        getCardInfo(cards['bronse'][card].name, cards['bronse']);
    }    

    for (card in cards["silver"]) {
      getCardInfo(cards["silver"][card].name, cards["silver"]);
    }             

    for (card in cards["gold"]) {
      getCardInfo(cards["gold"][card].name, cards["gold"]);
    }  

    for (card in cards["leader"]) {
      getCardInfo(cards["leader"][card].name, cards["leader"]);
    }  
    
var writeJson = function(arr){
    fs.appendFileSync("noimg.json", arr);
}