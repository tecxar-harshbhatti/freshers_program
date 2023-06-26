function parent(){

    console.log('I have you...');
    function child(){   
        console.log('You have me...');
    } 
    return child
}

const harsh = parent()
console.log(harsh())



function shape(){

    let count=0
    function circle(){
        count++
        return count
    }
    function square(){
        count--
        return count
    }

    function rectengle(){
        count++
        return count
    }

    return{
        f1 : circle(),
        f2 : square(),
        f3 : rectengle()
    }
}

const hardik = shape()
console.log(hardik.f1);
console.log(hardik.f2);
console.log(hardik.f3);