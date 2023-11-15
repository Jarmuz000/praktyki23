const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const zad1 =()=>
{
    let arr3=arr1.concat(arr2);
    console.log(arr3);
}

const zad2 =()=>
{
    let arr3=arr1.reverse();
    console.log(arr3[arr3.length-1]);
}

const zad3 =()=>
{
    const arr3 = arr2.filter(zad3pomoc);
    console.log(arr3);
}

const zad3pomoc =(a)=>
{
    a = a.split('');
    return (a[a.length-1]=="k");
}//sprawdza czy imię kończy się na k

const zad4 =()=>
{
    const ilosc1 = 0;
    const suma = numbers.reduce
    (
        (skladnik, ilosc2) => skladnik + ilosc2,
        ilosc1,
    );
    console.log(suma);
}

const zad5 =()=>
{
    const map = new Map();
    map.set('a',Math.pow(numbers[0],2)+3);
    map.set('b',Math.pow(numbers[1],2)+3);
    map.set('c',Math.pow(numbers[2],2)+3);
    map.set('d',Math.pow(numbers[3],2)+3);
    map.set('e',Math.pow(numbers[4],2)+3);
    console.log(map);
}

const zad6 =()=>
{
    const arr3 = numbers.filter(zad6pomoc);
    console.log(arr3);
}

const zad6pomoc =(a)=>
{
    return (a%2==0);
}