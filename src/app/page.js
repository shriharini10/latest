export default function Home() {

  const isUserLoggedIn = true;

  const userName = 'HARINI';

  const bookList = [               //creating a list and rendering items
        {
            name:'Pride and Prejudice',
            author:'Jane austen',
            price:599
        },

        {
            name:'The Hobbit',
            author:'J.R.R. Tolkin',
            price:699 
        },

        {
            name:'Angels and Demons',
            author:'Dan Brown',
            price:599
        }
  ]

  const book = {
        name:'Angels and Demons',
        author:'Dan Brown',
        price:599
  };
    
  console.log(bookList); // Rendering entire booklist
  console.log(bookList[1]);// Rendering an item through indexing
  console.log(bookList[2].author);// Rendering through member operator

  return (


    <div>
      {isUserLoggedIn?<h1>Welcome {userName}</h1>:<p>PLEASE LOG IN❗</p>}

      <div>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <h2>{book.price}</h2>
      </div>

      {
        bookList.map(eachBook =>{
          return(
            <div>
              <h3>{eachBook.name}</h3>
              <h4>{eachBook.author}</h4>
              <h2>{eachBook.price}</h2>
            </div>
          )
        })
      }
    </div>
  );
}
