try{
    console.log(a);
    let a = 3;
    
}catch{
    console.log('let must be declared before use');
    
}

try {
    let b = 1/0
    if(b == Infinity){
        throw new Error('cannot be divided by zero')
    }
    
} catch (err) {
    console.log(err.message);
}