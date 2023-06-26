function outer(){

    let count = 0;
    function inner(){
        count++
        return count
    }
    return inner
}
const c1 = outer()
console.log(c1());
console.log(c1());


function OuterFunc(){

    let count = 0;
    function plus(){
        count++
        return count
    }

    function minus(){
        count--
        return count
    }

    return{
        p1 : plus(),
        m1: minus()
    }
}

const x = OuterFunc()
console.log(x.p1);
console.log(x.m1);