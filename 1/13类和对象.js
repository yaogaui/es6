{
    //基本定义和生成实例
    class Parent{
        constructor(name){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    //继承
    class Parent{
        constructor(name = 'aaa'){
            this.name = name;
        }
    }

    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    //继承传递参数
    class Parent{
        constructor(name = 'aaa'){
            this.name = name;
        }
    }

    class Child extends Parent{
        constructor(name = 'child'){
            super(name);
            this.type = 'child';
            //这里super()内含有的参数 还能修改
            //若用super()传递参数 一定要放在第一行
        }
    }
    console.log('继承',new Child());
}

{
    //getter setter
    class Parent{
        constructor(name = 'aaa'){
            this.name = name;
        }
        get longName(){
            return 'yg'+this.name
        }

        set longName(value){
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello';
    console.log('setter',v.longName);
}

{
    //静态方法
    class Parent{
        constructor(name = 'aaa'){
            this.name = name
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}

{
    //静态属性
    class Parent{
        constructor(name = 'aaa'){
            this.name = name
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.type = 'test';
    console.log('静态属性',Parent.type);
}