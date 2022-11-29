const cats=  ["Milo", "Otis", "Garfield"]
function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
  function destructivelyAppendCat(name1){
   name1='Ralph';
    return cats.push(name1);
  }
  function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
  function destructivelyPrependCat(name2)
  {

   name2="Bob";
  return cats.unshift(name2);
}
function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats)
}
function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
function destructivelyRemoveFirstCat()
{
    cats.shift()
    console.log(cats);
}

function beforeEach(){
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
}
function appendCat(name4){
    const catsnew = [...cats,`${name4}`];
    return catsnew;


}
appendCat("Broom")
function beforeEach(){
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
}
function prependCat(name3){
    const catsnew = [`${name3}`,...cats];
    return catsnew;


}
prependCat("Arnold")

function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
function removeLastCat(){
   return cats.slice(0, cats.length - 1) // ["chocolate", "vanilla"]

}
function beforeEach(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }
function removeFirstCat(){
  return cats.slice(1,3)

}