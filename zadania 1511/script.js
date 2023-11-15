const zad1 =(a,b)=>
{
    if(a==b)
    {
        console.log(b);
    }
    else
    {
        console.log(b);
        return zad1(a,b-1);
    }
}

const zad2 =(a)=>
{
    for(let i = 0; i <=a ; i++)
    {
        console.log(zad2rek(i));
    }
}

const zad2rek =(a)=>
{
    if(a<2)
    {
        return 1;
    }
    return zad2rek(a-1)+zad2rek(a-2);
}

const zad3 =()=>
{
    const a = [1,3,5];
    const b = [2,4,6];
    b.push(a);
    for(let i=0;i<6;i++)
    {
        console.log(b[i]+",");
    }
}

const zad4 =(a)=>
{
    const tab = [12,"xd",1,55,1,"xd",16,55];
    let result = [];
    let j=0;
    for(let i=0; i<tab.length;i++)
    {
        if(tab[i]==a)
        {
            result[j]=tab[i];
            j++;
        }
    }
    console.log(result);
}

const zad5 =(a,b,c,d,e)=>
{
    let tab=[a,b,c,d,e];
    for(let i=0;i<tab.length;i++)
    {
        if(typeof(tab[i])!="number")
        {
            console.log("element "+i+" nie jest liczbą!");
            return 0;
        }
    }
    let suma=0;
    for(let i=0;i<tab.length;i++)
    {
        suma+=tab[i];
    }
    console.log(suma);
}