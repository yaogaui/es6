{
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function(){
            callback && callback.call();
        },1000);
    }
    ajax(function(){
        console.log('timeout');
    })
}

{
    let ajax = function(){
        console.log('执行');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    }
    ajax().then(function(){
        //resolve
        console.log('promise','timeout');
    },function(){
        //reject
    })
}

{
    let ajax = function(){
        console.log('执行');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    }
    ajax()
    .then(function(){
        //resolve
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000)
        })
    },function(){
        //reject
    })
    .then(function(){
        //resolve
        console.log('promise','timeout');
    },function(){
        //reject
    })
}

{
    let ajax = function(num){
        console.log('执行');
        return new Promise(function(resolve,reject){
            if(num > 5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        })
    }
    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    })
    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    })
}

{
    //所以图片加载完 再加载页面
    function loadImg(src){
        return new Promise(
            function(resolve,reject){
                let img = document.createElement('img');
                img.src = src;
                img.onload = function(){
                    resolve(img);
                }
                img.onerror = function(err){
                    reject(err);
                }
            }
        )
    }

    function showImgs(imgs) {
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }
    function showImg(img){
        document.body.appendChild(img);
    }
    //把多个promise实例当做一个promise实例
    Promise.all([
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/7/28/16/28507299.jpg'),
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/8/5/16/50324892.jpg'),
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/9/8/14/23024227.jpg')
    ]).then(showImgs);


    //多个实例种有一个率先改变 则执行race
    Promise.race([
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/7/28/16/28507299.jpg'),
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/8/5/16/50324892.jpg'),
        loadImg('http://www.fsdjy.com.cn/statics/attachment/2020/9/8/14/23024227.jpg')
    ]).then(showImg);
}

{

}