const palindrom =()=>
{
    const word = String(palindrom.value);
    let reverseWord="";
    let check = true;
    for(let i = 1 ; i <= word.length;i++)
    {
        reverseWord += String(word[word.length-i]);
    }
    for(let i = 1 ; i <= word.length;i++)
    {
        if(reverseWord[i]!=word[i])
        {
            check = false;
        }
    }
    console.log(check);
}

const zad3 =()=>
{
    let tab = [];
    if(c1.checked)
    {
        tab[0]=parseFloat(t1.value);
        tab[1]=parseFloat(t2.value);
        tab[2]=parseFloat(t3.value);
        tab[3]=parseFloat(t4.value);
        tab[4]=parseFloat(t5.value);
        let max=0;
        for(let i=1;i<5;i++)
        {
            if(tab[i]>tab[max])
            {
                max=i;
            }
        }
        let second;
        let secondv=0;
        for(let i=0;i<5;i++)
        {
            if(i!=max&&tab[i]!=tab[max]&&tab[i]>secondv)
            {
                secondv=tab[i];
                second=i;
            }
        }
        console.log(tab[second])
    }
    else if(c2.checked)
    {
        tab[0]=String(t1.value);
        tab[1]=String(t2.value);
        tab[2]=String(t3.value);
        tab[3]=String(t4.value);
        tab[4]=String(t5.value);
        let max=0;
        for(let i=1;i<5;i++)
        {
            if(tab[i].length>tab[max].length)
            {
                max=i;
            }
        }
        let second;
        let secondv=0;
        for(let i=0;i<5;i++)
        {
            if(i!=max&&tab[i].length!=tab[max].length&&tab[i].length>secondv)
            {
                secondv=tab[i].length;
                second=i;
            }
        }
        console.log(tab[second])
    }
}

const zad4 =()=>
{
    let word1=String(wyraz1.value);
    let tab1=word1.split('');
    let word2=String(wyraz2.value);
    let tab2=word2.split('');
    for(let i=0;i<tab1.length;i++)
    {
        for(let j=0;j<tab1.length;j++)
        {
            if (tab1[j] > tab1[j + 1]) 
            { 
                let temp = tab1[j] 
                tab1[j] = tab1[j + 1] 
                tab1[j + 1] = temp 
            }
        }
    }
    for(let i=0;i<tab2.length;i++)
    {
        for(let j=0;j<tab2.length;j++)
        {
            if (tab2[j] > tab2[j + 1]) 
            { 
                let temp = tab2[j] 
                tab2[j] = tab2[j + 1] 
                tab2[j + 1] = temp 
            }
        }
    }
    let check = true;
    if(tab1.length==tab2.length)
    {
        for(let i = 0; i < tab1.length;i++)
        {
            if(tab1[i]!=tab2[i])
            {
                check = false;
            }
        }
        
    }
    else
    {
        check=false;
    }
    if(check)
    {
        console.log("to są anagramy");
    }
    else
    {
        console.log("to nie są anagramy");
    }
}