{
    //数据结构横向对比 増 查 改 删
    let map = new Map();
    let arr = [];
    //増
    map.set('t',1);
    arr.push({t:1});
    console.info('map-array',map,arr);
    //查
    let map_exist = map.has('t');
    let arr_exist = arr.find(function(item){
        return item.t;
    })
    console.info('map-array',map_exist,arr_exist);
    //改
    map.set('t',2);
    arr.forEach(function(item){
        item.t?item.t = 2 : '';
    })
    console.info('map-array',map,arr);
    //删
    map.delete('t');
    let index = arr.findIndex(function(item){
        return item.t;
    });
    arr.splice(index,1);
    console.info('map-array',map,arr);
}

{
    let set = new Set();
    let arr = [];

    //増
    set.add({t:1});
    arr.push({t:1});
    console.info('set-array',set,arr);
    //查
    let ser_exist = set.has({t:1}); //新生成的对象 所以为false 同一地址是为true；
    let arr_exist = arr.find(item=>item.t);
    console.info('set-array',ser_exist,arr_exist);
    //改
    set.forEach(item=>item.t ? item.t = 2 : '');
    arr.forEach(item=>item.t ? item.t = 2 : '');
    console.info('set-array',set,arr);
    //删
    set.forEach(item=>item.t ? set.delete(item) : '');
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.info('set-array',set,arr);
}

{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    //増
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.log('map-set-obj',map,set,obj);
    //查
    console.log('map-set-obj',map.has('t'),set.has(item),'t' in obj);
    //改
    map.set('t',2);
    item.t = 2;
    obj['t'] = 2;
    console.log('map-set-obj',map,set,obj);
    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj',map,set,obj);
    //优先使用map，强调数据唯一性用set（同一引用地址），少用object；
}