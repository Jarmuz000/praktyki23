const calculate=()=>
{
    
    const a = parseFloat(liczba1.value);
    const b = parseFloat(liczba2.value);
    let wynik;
    if(dodaj.checked)
    {
        wynik=a+b;
        result.innerHTML="dodawanie: "+wynik;
    }
    else if(odejmij.checked)
    {
    wynik=a-b;
    result.innerHTML="odejmowanie: "+wynik;
    }
    else if(pomnoz.checked)
    {
    wynik=a*b;
    result.innerHTML="mnozenie: "+wynik;
    }
    else if(podziel.checked)
    {
        if(b==0)
        {
            result.innerHTML="dzielenie: nie można wykonać";
        }
        else
        {
            wynik=a/b;
            result.innerHTML="dzielenie: "+wynik;
        }
    }
}