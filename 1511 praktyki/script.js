let post = 0;

const nextPost =()=>
{
    post+=1;
    fetch('https://jsonplaceholder.typicode.com/photos/'+post)
	.then((response) => {
		if(!response.ok) {
			throw new Error("Błąd połączenia")
		}
		return response.json()
	})
	.then((myJson) => {
		console.log(myJson.id+" "+myJson.title+" ");
	})
	.catch((error) => console.error('Wystąpił błąd: ', error))
}

const prevPost =()=>
{
    if(post > 1)
    {
        post-=1;
        fetch('https://jsonplaceholder.typicode.com/photos/'+post)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Błąd połączenia")
            }
            return response.json()
        })
        .then((myJson) => {
            console.log(myJson.id+" "+myJson.title+" ");
        })
        .catch((error) => console.error('Wystąpił błąd: ', error))
    }
}