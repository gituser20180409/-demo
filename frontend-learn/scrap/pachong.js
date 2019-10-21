const http = require("http")
const url = require("url")
const request = require("request")
const cheerio = require("cheerio")
const iconv = require('iconv-lite')

const server = http.createServer((req,res)=>{
    let serv = url.parse(req.url).pathname
    if(serv === '/getNews'){
        pachong(res)
    }
})
server.listen(3333)
function pachong(re){
    re.setHeader("Access-Control-Allow-Origin", "*")
    re.writeHead(200,{"Content-Type":"application/json"})
    console.log('第一步')
    let array = []
    request({gzip:true,url:'http://top.baidu.com/buzz?b=341&c=513&fr=topbuzz_b1'},(err,res,body)=>{
        if(err){
            console.log(err)
        }else{
            console.log('第二步')
            let html = iconv.decode(body, 'GBK')
            console.log(html)
            let $ = cheerio.load(html,{decodeEntities: false})
            $('body .wrapper .main .mainBody .list-table tbody').children('tr').each((index,item)=>{
                let newsTitle
                if(index<=10){
                    if($(item).children('td')[1]){

                        array.push($(item).children('td')[1].firstChild.next.children[0].data)
                        //newsTitle = $(this).children('.keyword .list-title').text()
                    }
                }else{
                    return
                }
                //console.log(newsTitle)
            })

            console.log(array)
            re.end(JSON.stringify({data:array}))//将json传回浏览器
        }
    })
}
