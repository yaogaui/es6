{
    function test(x,y = 'world'){
        console.log('默认值',x,y)
    }
    test('hello');
    test('hello','kill');
}

{
    let x = 'test';
    function test2(x,y = x){
        console.log('作用域',x,y);
    }
    test2('kill');
    test2();
    
    function test2(c,y = x){
        console.log('作用域',c,y);
    }
    test2('kill');
    test2();
}

{
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test3(1,2,3,4,"a")
}

{
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
}

{
    let arrow = v => v*2;
    let arrow = () => 5
    console.log(arrow(3));
    console.log(arrow2());
}

{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);
    }
    fx(123);
    //委调用
}