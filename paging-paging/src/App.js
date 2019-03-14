import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    for (let i = 0 ;i < 4 ; i++) {
      console.log(i); 
    }


    // 在制定子元件的屬性為父元件的state值時，以函式表達式制定<button onClick={(a)=>{return a}}/> 或 clickHandler=(a)=>{return a}; <button onClick={this.clickHandler}/>將帶表「參照」此函式，但不「使用」;若以函式定義式則代表「使用」
    // 但在寫函式表達式(something = (a) => a)時，參數名稱不是放置等號左邊地方，等號右邊才是放入傳入參數名稱的地方

    // 原理：呼叫函式時，右邊不加括號與加括號的差別在於，加括號代表「使用」這個函式，不加括號代表「僅參照（Reference）」這個函式。父子元件溝通時，會參照很多函式，但會使用的函式至少要有一個，可能在子元件，可能在父元件。
    // 如果使用一個回調函式（使用函式，此函式回傳函式），表示回傳的函式將較晚執行。這造成一個情況會出問題：當子元件的onChange參照子元件onClickHandler函式，該函式log出來文字內容並使用為父元件的屬性中的函式，父元件的屬性參照父元件onClickHandler函式，該函式參照另一個函式指定其state中文字內容值，則state值將會跟log出來的字不同步，因為回調函式中，主函式先執行，回傳的函式後執行。
    // 如果你使用函式時，會執行函式並回傳結果。如果執行函式因此更新了state，就會重新render，於是又建立了標籤執行函式更動state又重新render，於是被拋出例外。解決問題的方法，就是將標籤裡會更新state的函式寫成回調函式，於是標籤裡只會執行外面那個函式並回傳你要的結果。如: <button onClick={this.clickHandler(()=>{ this.setState({text:'text'})})}/>改成<button onClick={this.clickHandler(()=>{()=>this.setState({text:'text'})})}/>
    // 表單元件(如<input/>)一個規則：標籤的value屬性能夠讓元件能受控制(controled)，如果沒有設定value，代表此元件為不受控，這樣要是有一些功能如清空文字就會有困難

    // 子母元件三種溝通方式：
    // 1.直接定議子元件的值是父元件的屬性，父元件的屬性是父元件的state:
          // 子元件：
          // return <childElement style={props.parentAttribute}>
          // 父元件：
          // getStateValue = () => this.state.value
          // <parentElement style={this.getStateValue}>
    // 2.使用e.target.value取得
          // 子元件：
          // return <childInput></childInput>
          // 父元件：
          // getValue = (event) => console.log(event.target.value)    
          // <parentInput onClick={this.getValue}>
    // 3.使用refs
          // 子元件：
          // <childInput ref={props.getRefHandler}/>
          // 父元件：
          // getRef = (element) => this.inputElement = element
          // console.log(inputElemnt)
          // <parentInput getRefHandler={this.getRef}/>  


    // 示範建立物件字面（Object Literals）

    const object = {
      age:10,
      height:180
    }

    // 示範物件字面的方法定義（Method Definition）

    var defindingMethodObject = {
      age:18,
      sayHi() {
        console.log('Say Hi!');
      }
    }

    console.log(defindingMethodObject.sayHi());
    

    // 示範函式表達式（並指定一個匿名函式）

    const aFuncA = function () {
      return 'hi!'
    }

    // 示範函式表達式（並指定一個有名字的函式）

    const aFuncB = function sayHi () {
      return 'hi!'
    }

    // 示範函式定義式（並為有名字的函式）

    function aFuncC(x) {
      return x
    }

    // 示範函式表達式（並指定肥箭頭函式）

    const fatFunc = (x,y) => x+y

    console.log();

    // 示範建立建構函式並使用運用原型鏈（Protype）

      ////建構函式 (ES6之前專用)
    function Player(name, age) {
      this.name = name
      this.age = age
    }

      ////使用原型鏈
    
    Player.prototype.newFunction = function () {
      console.log('Hi!');
    }
    const alex = new Player('Alex',18)
    alex.newFunction()  

      //// 就算後期新增函式，前面已經宣告過的物件仍可使用新增的函式

    Player.prototype.sayNo = function () {
      console.log('no');
    }
    alex.sayNo()

  // 示範建立類別

  class Junper {
    constructor (age, height, country) {
      this.age = age
      this.height = height
      this.country = country
    }
    toString() {
      return 'age: ' + this.age + ', height: ' + this.height + ', country: ' + this.country
    }
  }
  const clare = new Junper(12,180,'Taiwan')
  console.log(clare.toString());

  // 示範建立有Getter與Setter的類別

  class ColorSetClass {
    constructor(key,value) {
      if (key !== undefined ){
        this['_'+key+'Value'] = value
      }
    }
    get color() {
      if(this._colorValue !== undefined) {
        return this._colorValue
      } else {
        return 'no color set!'
      }
    }
    set color(newColor) {
      this._colorValue = newColor
    }
  }

  const myColorSet = new ColorSetClass('color','red')
  console.log(myColorSet.color);
  myColorSet.color = 'yellow'
  const myBikeSet = new ColorSetClass('type','giant')
  console.log(myBikeSet.color);


  // 展示類別中的繼承

  class Animals {
    constructor (type, size) {
      this._type = type
      this._size = size
    }
    toString() {
      return  `type: ${this._type}, size: ${this._size}`
    }
  }

  class Dock extends Animals {
    constructor (type,size,color) {
      super(type,size)
      this._color = color
    }
    toString() {
      return super.toString() + `, color: ${this._color}`
    }
  }

  const animal = new Animals('animal','s') 
  console.log(animal.toString());
  const aDock = new Dock('bird','m','red')
  console.log(aDock.toString());
  

  // 示範靜態成員（不需實例化就能使用的成員）

  class CoffeeRecipe {
    constructor(type,size) {
      this._type = type
      this._size = size
      CoffeeRecipe.countProduction()
    }
    static countProduction(){
      if (this._number === undefined) {
        this._number = 1
      } else {
        this._number++
      }
    }
    static get production(){
      return this._number
    }
    static set production(number){
      this._number = number
    }
  }

  const latte = new CoffeeRecipe('latte', 'L')
  console.log(CoffeeRecipe.production);
  const expresso = new CoffeeRecipe('expresso','s')
  console.log(CoffeeRecipe.production);
  CoffeeRecipe.production = 12
  console.log(CoffeeRecipe.production);
  const milk = new CoffeeRecipe('milk','m')
  console.log(CoffeeRecipe.production);
  console.log(milk.production);
  
  // 示範三種建立promise的方式

  function createPromiseˋ(aObject) {
    if (typeof aObject === 'object' ) {
      return Promise.resolve(aObject)
    } else {  
      throw new Error('Error')
    }
  }

  function createPromise5(aObject) {
    if (typeof aObject === 'object' ) {
      console.log('resolved!')
      return Promise.resolve(aObject)
    } else {  
      console.log('reject!')
      return Promise.reject(aObject)
    }
  }

  function createPromise6 (aObject) {
    const promise03 = new Promise(function (resolve,reject) {
      if (typeof aObject === 'object') {
        console.log('resolved!')
        return Promise.resolve(aObject)
      }else {  
        console.log('reject!')
        return Promise.reject(aObject)
      }
    })
  }
  

  

    // function a() {
    //   var x = 0
    // }

    // var y = 0

    // console.log(x);
    // console.log(y);

    // console.log(typeof a);
    
    const sum = (a,b) => a+b
    const createArray = (a,b,c) => [a,b,c]
    console.log(sum(10,3));
    console.log(createArray(12,16,-10));

// p 4-5

    function defaultTest(x = 10, y = 20) {
      return x + y;
    }

    const fedaultFatFuncTest = (x=10, y=20) => x + y
    console.log(fedaultFatFuncTest() + ", " + fedaultFatFuncTest(-10) + ", " + fedaultFatFuncTest(-20,-30));
    console.log(defaultTest() + ", " + defaultTest(30) + ", " + defaultTest(40,50));
    
    // p4-7
    
    function instantCaculateFunction(x = []) {
      x.push(1)
      console.log(x);      
    }

    instantCaculateFunction()
    instantCaculateFunction()
    instantCaculateFunction()
    
    // summary: they won't affect each other when the functions are called
    // 4-10

    function shouldNotEmpty(x) {
      if (x === undefined) throw new Error('Missing parameter')
      console.log(x);
      
    }
    shouldNotEmpty(1)

    function parameterMissingError() {
      throw new Error('Missing parameter')
    }

    function shouldNotEmpty2(x = parameterMissingError()) {
      console.log(x);
      
    }
    shouldNotEmpty2(1)

    // 4-11

    function defaultParameterAdvanced({a,b} = {a:10,b:20}) {
      console.log({a,b});
    }
    defaultParameterAdvanced({a:2})
    defaultParameterAdvanced({a:2,b:4})

    function defaultParameterAdvanced2({a = 10,b = 20} = {}) {
      console.log({a,b});
    }
    defaultParameterAdvanced2()
    defaultParameterAdvanced2({a:-20})
    defaultParameterAdvanced2({a:-20, b:-50})

    // 5-4

    const arrayZ = [undefined,[1,2]]
    const arrayA = [12,"papaya",true]
    const arrayB = [1,2,...arrayZ,7,4,...arrayA]
    console.log(arrayB);
    
    
    const astring = "papaya"
    const anArray = [...astring]
    console.log(anArray);
    
    function aFunc(x) {
      console.log(arguments)
      console.log(Array.isArray(arguments))

      const argsInArray = [...arguments]
      console.log(argsInArray)
      console.log(Array.isArray(argsInArray))
    }

    aFunc()

    // 5-5

    function restParameters(...numbers) {
      let result = 0
      numbers.forEach((index) => {
        result += numbers[index-1]
        console.log(numbers[index-1]);
      });      
      console.log(result);
    }

    restParameters(1,2,3,4,5)

    function printRestOperator(x,...y) {
      console.log('x = ',x,', y = ', y);
    }

    printRestOperator(1,2,3)
    printRestOperator(1,2)
    printRestOperator()

    // 5-6 destructing

    function destructing(...[a,b,c]) {
      console.log(a+b+c);
    }
    destructing(1)
    destructing(1,2,3)
    destructing(1,2,3,4)

    function destructingOrigional(...parameter) {
      const [a,b,c] = parameter
      console.log(a+b+c);
    }
    destructingOrigional(1)
    destructingOrigional(1,2,3)
    destructingOrigional(1,2,3,4)

// 6-3 create An object

    const emptyObject = {}
    const player = {
      age: 18,
      gerder:"Male",
      name: {
        firstName: "Huan Chen",
        lastName: "Su"
      },
      sing: function () {
        console.log("lalalala")
      }
    }

    console.log(emptyObject.name);
    console.log(player.age + ", " + player.gerder + ", " + player.name.firstName + ", " + player.name.lastName + ", " + player.sing());
    
    const appendedArray = ["A","B","C"]
    appendedArray[3] = "D"
    appendedArray[1] = "E"
    const appendedObject = {
      height: 100,
      width:50,
      zIndex: 10
    }
    appendedObject.zIndex = 100
    appendedObject.color = "red"
    
    console.log(appendedArray + ", appendedObject:" + appendedObject.height + ", " + appendedObject.color);
    
    // 6-6 不必再寫屬性名稱
      // ES5:
      
    function needsPropName(a,b) {
      console.log({a:a,b:b,c:c});
    }
    const a = 'banana', b = 22, c = true
    const needsPropName2 = {a:a, b:b, c:c}

    console.log(needsPropName(1,-100), needsPropName2);
      // ES6:

    function noMorePropName(a,b) {
      console.log({a,b});
    }
    const d = 'apple', e = 13, f = true
    const noMorePropName2 = [d,e,f]
    console.log(noMorePropName2, noMorePropName(true,null));
    
  // 6-6 方法定義

  const people = {
    age:12,
    name: {
      firstName: 'Huan Chen',
      listName: 'Su',
    },
        // origional: 
    sing: function (x) {
      if (x === undefined) {
        x = 'lalalala'
      }
      console.log(x);
    },
        // now: 
    jump(x = 'papapapa') {
      console.log(x)
    }
  }

  people.sing()
  people.jump()
  people.sing('123123')
  people.jump('123123')

  // 6-8 computed property name

  const suggestedName = 'Apple'
  const notInitiatedNameFunc = {
    [suggestedName] : 12,
    ['combined' + 'name'] : true
  }

  console.log(notInitiatedNameFunc);
  
// 6-8 Object.assign

  const funcToBeAssigned = {
    age:30,
    height: 180,
    weight:60
  }
  const assignedFunction = Object.assign({}, funcToBeAssigned)
  console.log(assignedFunction);


  
  const largeFuncToBeAssigned = {a:1, b:2, c:3}
  const mediumFuncToBeAssigned = {a:2, b:4}
  const smallFuncToBeAssigned = {a:10}
  let tribleAssignedFunc = Object.assign({},largeFuncToBeAssigned)
  tribleAssignedFunc = Object.assign({},mediumFuncToBeAssigned)
  tribleAssignedFunc = Object.assign({},smallFuncToBeAssigned)

  console.log(tribleAssignedFunc);

  tribleAssignedFunc = Object.assign({},largeFuncToBeAssigned, mediumFuncToBeAssigned, smallFuncToBeAssigned)

  console.log(tribleAssignedFunc);
  
// 6-9 prototype

  // origional 

  function AClass(a,b) {
    this.a = a
    this.b = b
    console.log(a,b);       
  }

  AClass.prototype.walk = function (x) {
    console.log('I wanna say: ',x);
  }

  const aObject = new AClass(1,2)
  aObject.walk('123')
  
  // you can do like this now

  Object.assign(AClass.prototype, {
    scream(y) {
      console.log('also, I wanna say: ',y);
    }
  })
  aObject.scream('yaaaa')

//  7-6 constructor

  class Runner {
    constructor (age, height, country) {
      this.age = age
      this.height = height
      this.country = country
    }

    toString() {
      return 'age: ' + this.age + ', height: ' + this.height + ', country: ' + this.country
    }
  }

  const tom = new Runner(12,180,'Taiwan')
  console.log(tom.toString());

  class Manager {
    constructor (key,value) {
      if (typeof key != undefined) {
        this[key] = value
      }
    }
  }

  const exampleMap1 = new Manager('color','red')
  const exampleMap2 = new Manager( undefined ,'red')
  console.log(exampleMap1,exampleMap2);
  
// 7-8 私有成員

  class Fireman {
    constructor (age, name, department) {
      this._age = age
      this._name = name
      this._department = department
    }

    toString() {
      return  `age: ${this._age}, name: ${this._name}, department: ${this._department}`
    }
  }

  const dylan = new Fireman(16,'Dylan','Shanghai')
  console.log(dylan.toString());
  console.log(dylan.age);
  
  // 私有成員有getter and setter 
  
  class Policeman {
    constructor(age,name,level) {
      this._age = age
      this._name = name
      this._level = level 
      this.getAge = function (){
        return this._age
      }
      this.getName = function (){
        return this._name
      }
      this.getLevel = function (){
        return this._level
      }
      let id = '000101'
    }
    toString () {
      return `${this._age}, ${this._name}, ${this._level}, ${this.id}`
    }
  }

  const lisa = new Policeman(40,'Alex',5)
  console.log(`age: ${lisa.getAge()}, name: ${lisa.getName()}, level: ${lisa.getLevel()}`);
  console.log(lisa.toString())
  console.log(lisa.id);

  // 官方的getter跟setter

  class ColorSet {
    constructor(key,value) {
      if (key !== undefined ){
        this['_'+key+'Value'] = value
      }
    }
    get color() {
      if(this._colorValue !== undefined) {
        return this._colorValue
      } else {
        return 'no color set!'
      }
    }
    set color(newColor) {
      this._colorValue = newColor
    }
  }

  const myColor = new ColorSet('color','red')
  console.log(myColor.color);
  myColor.color = 'yellow'
  const myBike = new ColorSet('type','giant')
  console.log(myBike.color);
  
  // 靜態成員

  class ClassHasStaticFunc {
    constructor (age,name) {
      this._age = age
      this._name = name

      ClassHasStaticFunc.countNumber()
    }

    static countNumber() {
      if (this._number === undefined) {
        this._number = 1
      } else {
        this._number++
      }
    }

    static get getNumbers(){
      return this._number
    }
  }
  
  const xivior = new ClassHasStaticFunc(18,'Xa')
  console.log(xivior.getNumbers);
  
  console.log(xivior.getNumbers);

  class Card {
    constructor(name,id) {
      this._name = name
      this.id = id
      Card._countCardNumber()
    }

    static _countCardNumber() {
      if (this._number === undefined) {
        this._number = 1
      } else {
        this._number++
      }
    }

    static get getNumber() {
      return this._number
    }
  }

  const aCard = new Card('index', 0)
  console.log(Card.getNumber);
  const anotherCard = new Card('end', 1)
  console.log(Card.getNumber);

  // 繼承

  class Animal {
    constructor (type, size) {
      this._type = type
      this._size = size
    }
    toString() {
      return  `type: ${this._type}, size: ${this._size}`
    }
  }

  class Bird extends Animal {
    constructor (type,size,color) {
      super(type,size)
      this._color = color
    }
    toString() {
      return super.toString() + `, color: ${this._color}`
    }
  }

  const anAnimal = new Animal('animal','s') 
  console.log(anAnimal.toString());
  const aBird = new Bird('bird','m','red')
  console.log(aBird.toString());
  
  
  
  // 解構賦值

  // 陣列
  const [g,h] = [1,2]
  console.log(g,h);
  const [i,,k] = [1,2,3]
  console.log([i,,k]);
  const [,,,j,l] = [1,2,3]
  console.log(j,l)
  let m = 1,n = 2
  ;[n,m] = [m,n]
  console.log(m,n);
  const [o,[p,[q,[r]]]] = [1,[2,[3,[[4,5]]]]]
  console.log([o,[p,[q,[r]]]]);
  const [e0,f0] = 'hello'
  console.log(e0,f0);
  
  // 物件

  const { user: abc} = {user: '123'}
  console.log(abc)
  let sss = {user: undefined,id: undefined}
  // 不可這樣寫，花括號做開頭時需要";"以斷句
  // let sss = {user,id}
  // {user: undefined,id: undefined}
  sss = {user: '123', id:456}
  // 簡寫
  const {c0,d0} = {c0:123, d0:123}
  console.log({c0,d0});
  
  // 非陣列或非物件

  // const [g0] = true
  // console.log(g0)
  // 錯誤Error!
  
  // 傳入預設參數

  const {amount:amount = 100, source:source = 'china'} = {}
  console.log(amount,source);
  const {color = 'red'} = {}
  console.log({color})
  const [ca = true,da = 12] = []
  console.log([ca,da]);
  const {ea = 'hello'} = 'hello'
  const [faa = 'hello'] = 'hello'
  console.log( ea,faa );
  function putDefaultArgs( {ga = 1,ha = 2} = { ga: 3, ha: 4}) {
    return ga+ha    
  }
  console.log(  putDefaultArgs({ga:3,ha:4}) );
  console.log(  putDefaultArgs({ga:3}) );
  console.log(  putDefaultArgs({}) );
  console.log(  putDefaultArgs() );

    // 傳入預設參數 －－傳入undefined or null時
  
  function putUnidefinedToDefault({ha = 1,ia = 2} = {a : 10, b : 20}) {
    return ha + ia
  }

  console.log(    putUnidefinedToDefault({ha: 7, ia: undefined})    );
  console.log(    putUnidefinedToDefault({ha: undefined, ia: undefined})    );
  console.log(    putUnidefinedToDefault({ha: null, ia: 6})    );
  console.log(    putUnidefinedToDefault({ha: null, ia: null})    );

  const ja = {ka: 1, la: 2}
  const {ka: x, la: y} = ja
  console.log(x,y);

  const ma = {na:1, oa:2}
  const {na,oa} = ma
  console.log(na,oa)

  // 10-7 陣列相關純粹函式 

  const purePush = (aArray,newEntry) => [...aArray,newEntry]
  console.log(purePush([1,2,3],4));
  
  const purePop = aArray => aArray.slice(0,1)
  console.log(purePop([1,2,3,4]));

  const pureShift = aArray => aArray.slice(1)
  console.log(pureShift([1,2,3,4]));
  
  const pureUnshift = (aArray, newEntry) => [newEntry,...aArray]
  console.log(pureUnshift([1,2,3],9));

  const pureSplice = (aArray,start,deleteCount,newContent) => [...aArray.slice(0,start),...newContent,...aArray.slice(start+deleteCount)]
  console.log(pureSplice(['March','April','June','July'], 1,2,['APRIL AND JUNE']));

  const compareFunction = (a,b) => {if (a<b) {return -1 } else if (a>b) {return 1}}
  const pureSort = (aArray,compare) => [...aArray.sort(compare)]
  console.log(pureSort([1,5,2,9,4,7],compareFunction));

  const pureReverse = aArray => {
    let newArray = []
    for (let i =0;i < aArray.length; i++) {
      let newItem = aArray.slice(i,i+1)
      newArray = [newItem[0],...newArray]
    }
    return newArray
  }
  const pureReverseEasy = aArray => [...aArray].reverse()

  console.log(pureReverse([1,2,3,4]));
  console.log(pureReverseEasy([1,2,3,4]));
  
  const pureDelete = (aArray,index) => [...aArray.slice(0,index),...aArray.slice(index+1, aArray.length)]
  console.log(pureDelete([1,2,3,4,5,6],3));
  
  const pureDeleteByValue = (aArray,value) => aArray.filter(function(item) {return item !== value})
  console.log(pureDeleteByValue([6,7,8,9],7));

//  10-10 物件相關純粹函式

  const obja = {pa:12, qa:true}
  let objb = {}
  Object.assign(objb,obja)
  console.log(objb.pa);

  const updateFunction = (oldObj,addNewItem) => Object.assign({},oldObj,addNewItem)
  console.log(updateFunction(obja,{a:true}));
  
  const objE = {pa:222, qa:false}
  const deleteValue = (object,keyToDelete) => {
    const objF = Object.assign({},object)
    delete objF[keyToDelete]
    return objF
  }
  console.log(deleteValue(objE,'pa'));
  
  const deleteValueAdvanced = (object,keyToDelete) => {
    const {[keyToDelete]: deleted,...obj} = object
    return obj
  }
  console.log(deleteValueAdvanced(objE,'pa'));

  // 11-8 Promise

  const promise1 = new Promise(function (resolve,reject) {
    if (1===1) {
      resolve(1)
    } else {
      reject()
    }
  })
  function onFullfilled(value) {
    console.log(value);
  }
  function onRejected(reason) {
    console.log(reason);
        
  }
  promise1.then(onFullfilled,onRejected)
  
  const promise2 = new Promise(function (resolve,reject) {
    if (1===1)
      resolve('value')
    else 
      reject('no')
  })

  promise2
  .then((value)=>value+'*1',(value)=>value+'*no1')
  .then((value)=>value+'*2',(value)=>value+'*no2')
  .catch((value)=>console.log('Error: ' + value))
  .then((value)=>value+'*3',(value)=>value+'*no3')
  .then((value)=>new Error('*ERROR'),(value)=>value+'*no4')
  .then((value)=>value+'*5',(value)=>value+'*no5')
  .catch((value)=>new Error('papaapa'))
  .then((value)=>console.log('done!' + value))
  

  const promise3 = new Promise((resolve,reject) => {
    if (1===2) 
        resolve(1)
    else
        reject(1)
  })

  promise3
  .then((value)=>value+'y1',(value)=>new Error('Error0'))
  .then((value)=>value+'y2',(value)=>value+'n2')
  .catch((value)=>console.log('Error1'))
  .then((value)=> value+'y3', (value)=>new Error('Error2'))
  .then(undefined,(value)=>value+'n4')
  .then((value)=>value+'y5',undefined)
  .catch((error)=>console.log('Error3'))
  .then((value)=>console.log('Done!' + value))
  
  // 11-17

  function createPromise1(aObject) {
    if (typeof aObject === 'object' ) {
      return Promise.resolve(aObject)
    } else {  
      throw new Error('Error')
    }
  }

  function createPromise2(aObject) {
    if (typeof aObject === 'object' ) {
      console.log('resolved!')
      return Promise.resolve(aObject)
    } else {  
      console.log('reject!')
      return Promise.reject(aObject)
    }
  }

  function createPromise3(aObject) {
    const promise03 = new Promise(function (resolve,reject) {
      if (typeof aObject === 'object') {
        console.log('resolved!')
        return Promise.resolve(aObject)
      }else {  
        console.log('reject!')
        return Promise.reject(aObject)
      }
    })
  }

  // 11-20 promise.all

  const pr1 = Promise.resolve(1002)
  const pr2 = 'pr2'
  const pr3 = new Promise(function (resolve,reject) {
    setTimeout(()=>resolve('foo'),1000)    
  })

  Promise.all([pr1,pr2,pr3]).then((value)=> console.log(value)).catch((error)=>console.log(error.message))
  Promise.race([pr1,pr2,pr3]).then((value)=> console.log(value)).catch((error)=>console.log(error.message))

    

  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    // return (
    //   <div className="App">
    //     <h1>Ya</h1>
    //   </div>
    // );

    // 直接在JSX加入ES6的語法

    // return (
    //   <div>
    //     <button onClick={()=>alert('Thank you!')}>Say Hello!</button>
    //   </div>
    // )
    // const button = <div><button onClick={()=>alert('Thank youuu!')}>Hi!</button></div>


    // JSX的表達式種類

    // value = {123 + 456}
    // value2 = {true}

    // const helloElement = React.createElement('Button',{id:'papaya'})
    // return [<div name={{firstname:'John',lastName:'Doe'}}/>,
    // helloElement
    // ]

    // 建立不只一個的root

    const buttons = 
    [
    <div>
    </div>,
    'sometext'
    ]
    return buttons


  }
}

export default App;
