module.exports = {
    mult(a,b){
        console.log(`${a*b}`)
    },
    divisao(a,b){
        if(b <= 0){
        console.log(`O dividendo precisa ser maior que zero`)    
    }else{
            console.log(`${a/b}`)
        }
    }
}