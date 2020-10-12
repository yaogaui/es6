{
    let list =  new Set();
    list.add(5);
    list.add(7);

    console.log("size",list.size)
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list);

    let arr = [1,2,3,1,2];
    let list2 = new Set(arr);
    console.log(list2);
    //不会做数据类型的转换
    let arr = [1,2,3,1,'2'];
    let list2 = new Set(arr);
    console.log(list2);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear;
    console.log('clear',list);
}
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    for(let key of list.keys()){
        console.log('keys',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let value of list){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }
    list.forEach(function(item){
        console.log(item);
    })
}

{
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    //weakList.add(2); 只能是对象
    //弱引用，只是拷贝地址
    //没有clear方法，没有size属性，不能遍历
    console.log(weakList);
}

{
    let map = new Map();
    let arr = ['123'];
    map.set(arr,456);
    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);

    console.log(map.size);
    console.log(map.get('a'));
    console.log(map.delete('a'),map);
    map.clear();
    console.log('clear',map);
}

{
    let map = new Map([['a',123],['b',456]]);
    for(let key of map.keys()){
        console.log(key);
    }
    for(let value of map.values()){
        console.log(value);
    }
    for(let [key,value] of map.entries()){
        console.log(key,value);
    }
    map.forEach(function(item){
        console.log(item);
    })
}

{
    let weakmap = new WeakMap();

    let obj = {};
    weakmap.set(obj,123);
    console.log(weakmap.get(obj));
}