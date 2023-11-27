const zad9 =()=>
{
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Udało się!"), 5000);
    }); 
    promise.then(console.log);
}

const zad10 =(x,y)=>
{
    multiplyAsync(x, y)
        .then((res) =>
        {
            console.log("Wynik: " + res);
        })
    .catch(console.error);
}

const zad11 =()=>
{
    const multiplyAsync = (x, y) =>
    {
        return myPromise = new Promise((resolve, reject) =>
        {
            if (typeof x === 'number' && typeof y === 'number') 
            {
                resolve(x * y);
            }
            else 
            {
                reject("Argument musi być liczbą.");
            }
        });
    }

    const check = (response) =>
    {
        if (response.status === 200)
        {
            return response.json();
        }
        else
        {
            throw Error('Błąd - status się nie zgadza');
        }
    };
      
    const print = (json) =>
    {
        for (const post of json)
        {
            console.log('Title:', post.title);
            console.log('Body:', post.body);
            console.log('');
        }
    };
      
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(check)
        .then(print)
        .catch(err => console.error("Błąd.", err));
}