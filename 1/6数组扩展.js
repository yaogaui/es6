{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);
    
    let empty = Array.of();
    console.log('arr=',empty);
}

{
    let p = document.querySelector('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent)
    })

    console.log(Array.from([1,3,5],function(item){
        return item=2
    }))
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill-7,pos',[1,'a',undefined,1,1,1,1,1,1].fill(7,1,3));
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index)
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value)
    }
    for(let [value,index] of ['1','c','ks'].entries()){
        console.log('value-index',value,index)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,2,4))
    //从第0位开始替换，替换值为第2位开始包括第2位，到第4位结束不包括第4位
}

{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}))
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}))
    //找到即返回
}

{
    console.log('number',[1,2,NaN].includes(1));
    console.log('number',[1,2,NaN].includes(NaN));
}