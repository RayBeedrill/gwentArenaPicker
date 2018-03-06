const fs = require('fs')

const https = require('https')

const data = require('./../src/assets/json/AllCardsImg.json')

var path = './images/'

var makeQuery = function (name, link, index, type) {
  try {
    var fileName = path + name.replace(new RegExp('/+/', 'g'), '_') + '.png'
    https.get(link, (response)=>{
      if( response.statusCode == 200){
        response.pipe(fs.createWriteStream(fileName))
        data[type][index].link = name.replace(new RegExp('/+/', 'g'), '_') + '.png'
        fs.writeFileSync('result.json', JSON.stringify(data), 'utf-8', 'w+')
      } else {
        data[type][index].link = 'netural.png'
        fs.writeFileSync('result.json', JSON.stringify(data), 'utf-8', 'w+')
      }
    })

  } catch (error) {
    data[type][index].link = 'netural.png'
    fs.writeFileSync('result.json', JSON.stringify(data), 'utf-8', 'w+')
  }
}



  for(let card in data['silver']) {
    makeQuery(data['silver'][card].name, data['silver'][card].link, card, 'silver')
  }
  for(let card in data['bronse']) {
    makeQuery(data['bronse'][card].name, data['bronse'][card].link, card, 'bronse')
  }
  for(let card in data['gold']) {
    makeQuery(data['gold'][card].name, data['gold'][card].link, card, 'gold')
  }
  for(let card in data['leader']) {
    makeQuery(data['leader'][card].name, data['leader'][card].link, card, 'leader')
  }



