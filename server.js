
var http =  require('http')

const server = http.createServer((request, response )=> {
    console.log('REQUEST:D')
    response.write( request.method + request.url)
        response.end()

})

server.listen(8080, ()=>{
console.log('server is listenning in localhost:8080')
})

