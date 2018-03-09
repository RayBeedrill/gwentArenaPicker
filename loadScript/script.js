const puppeteer = require('puppeteer');

var getData = () => {
    var data = document.querySelectorAll('#content > section > div > div.listing-body > div.sw-card-visual-info')
    var arr = []
    for (let i = 0; i < data.length; i++) {
        
        var obj = {
            name: data[i].children[1].children[0].children[0].innerText,
            url: data[i].children[0].children[0].children[0].src
        }
        arr.push(obj)
    }
    return arr
   
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.setViewport({width:1280, height:1024})
    await page.goto('https://www.gwentdb.com/cards/', {
         waitUntil: 'domcontentloaded',
         timeout: 0 })
    
    const data = await page.evaluate(getData)
    console.log(data)
    await page.close()
    await browser.close()   
    
    
})();