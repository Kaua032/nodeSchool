const fs = require('fs')

fs.open('arquivo.txt', 'w', (err) =>{
    if(err) throw err
    console.log('created')
})

fs.writeFile('arquivo.txt','conteúdo', (err)=>{
    if(err) throw err
    console.log('novo conteúdo inserido')
})

fs.readFile('arquivo.txt', 'utf-8', (err, data)=>{
    if(err) throw err
    console.log(data)
})


fs.writeFile('arquivo.txt','outro conteúdo', (err)=>{
    if(err) throw err
    console.log('const')
})

fs.readFile('arquivo.txt', 'utf-8', (err, data)=>{
    if(err) throw err
    console.log(data)
})