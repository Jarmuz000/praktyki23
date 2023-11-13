const zad1 =(a,b)=>
{
    if(a==b)
    {
        console.log(a);
    }
    else
    {
        console.log(a);
        return zad1(a+1,b);
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