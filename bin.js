const bin = (n , k)=>{
    let b = []

    for(let i = 0 ; i<= n ; i++){
        for(let j = 0 ; j<=k ; j++){
            if(j === 0 || j === i){
                b[i , j] = 1
            }else{
                b[i,j] = b[i-1 , j-1] + b[i-1 , j]
            }
        }
    }

    return b[n,k]
}


console.log(bin(4,2));
