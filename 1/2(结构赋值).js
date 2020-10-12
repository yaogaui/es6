{
    let a, b;
    [a, b] = [1, 2];
    console.log(a, b)
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest)
}

{
    let a, b;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c)
}

{
    let a, b;
    [a, b, c] = [1, 2];
    console.log(a, b, c)
}
//解构赋值时，结构匹配不成功时 值为undefined

{
    let a, b;
    ({
        a,
        b
    } = {
        a: 1,
        b: 2
    })
    console.log(a, b)
}

// 应用1，变量的交换
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b)
}

// 应用2
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b)
}

//应用3
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b;
    [a, , , b] = f();
    console.log(a, b)
}

//应用3(未知函数返回数组长度)
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b;
    [a, , ...b] = f();
    console.log(a, b)
}

//对象解构赋值
{
    let o = {
        p: 42,
        q: true
    }
    let {
        p,
        q
    } = o;
    console.log(p, q);
}

{
    let o = {
        p: 42,
        q: true
    }
    let {
        p,
        q
    } = o;
    console.log(p, q);
}

{
    let {
        a = 1, b = 2
    } = {
        a: 3
    }
    console.log(a, b);
}

//应用
{
    let metaData = {
        title: "abc",
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title : esTitile,test : [{title:cnTitile}]} = metaData;
    console.log(esTitile,cnTitile);
}