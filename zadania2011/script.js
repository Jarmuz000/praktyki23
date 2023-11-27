const books = [
    { title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7 },
    { title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4 },
    { title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2 },
    { title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9 },
    { title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8 },
    { title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1 },
    { title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5 },
];

const zad6 =()=>
{
    const Filter = (arr) => arr.filter((book) => book.pages % 2 == 0 & book.genre.endsWith("y"));

    const sumLetters = (book) => book.reduce((letters, book) => letters + book.title.replace(/\s/g, '').length, 0);

    const comp = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);
  
    const result = comp(Filter, sumLetters);
    console.log(result(books));
}

const zad7 =()=>
{
    const Filter = (arr) => arr.filter((book) => /\d+/.test(book.title) && book.pages % 2 == 1 && book.rating > 5);

    const sumPages = (book) => book.reduce((ratingsAbove5) => ratingsAbove5 + 1, 0);
  
    const comp = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);
  
    const result = comp(Filter, sumPages);
    console.log(result(books));
}

const zad8 =()=>
{
    const sortBooks = (arr) => arr.sort((min, max) => max.title.length - min.title.length);

    const titles = (arr) => arr.map(({ title }) => title);

    const comp = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);
  
    const result = comp(sortBooks, titles);
    console.log(result(books)[1]);
}