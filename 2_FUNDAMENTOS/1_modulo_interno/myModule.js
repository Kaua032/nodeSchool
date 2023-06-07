module.exports = {
    multi(a, b){
        console.log(`${a*b}`)
    },
    div(a,b){
        a > 0 ? console.log( `${a/b}`): console.log( `ERROR`)
    }
}