'use client'
import  data from './data.json'
import { useState } from "react";

const Home = () => {

  const [d,newdata] = useState([]);

  const isUserLoggedIn = true;

  const userName = 'HARINI';

  //console.log(data.bookList)  //displaying the contents of the json file
  //console.table(data.bookList) //displaying the contents of the json file in a table

  const books = data.bookList
  //console.table(books) //displays a table of books from the definition

  /*const getUsers = () => { // use of fetch and .then
    const APIUrl = 'https://jsonplaceholder.typicode.com/albums/1'

    const result = fetch(APIUrl)
    .then(res => res.json())
    .then(json => console.log(json))

    return result

  
  };*/

  const getUsers = async () => { // use of async await
    const APIUrl = 'https://jsonplaceholder.typicode.com/albums'

    const url = await fetch(APIUrl)
    const result = await url.json()

    const newdata1 = {
      userId : 11, 
      id : 101,
      title : '500 days of summer'
    }
    result.push(newdata1) //use of push operator

    const newdata2 = {
      userId : 12, 
      id : 102,
      title : 'Two men in a boat'
    }
    

    const anotherdata = [...result, newdata2] //use of spread operator
    newdata(anotherdata)  //updated state

    localStorage.setItem('album', JSON.stringify(anotherdata)) // adding items to local storage
    //console.table(JSON.parse(localStorage.getItem('album'))) //fetching items from local storage
  
  };

  



  return (


    <div>
      <center><strong>{isUserLoggedIn?<h1>Welcome {userName}</h1>:<p>PLEASE LOG IN❗</p>}</strong></center>


      

      {
        books.map((eachBook, index) =>{
          return(
            <center key= {index}>
              <h3>{eachBook.name}</h3>
              <h4>{eachBook.author}</h4>
              <h2>{eachBook.price}</h2>
            </center>
           
          )
        })
      }
      <center><button onClick={()=>{getUsers()}}>🆗</button></center>
    </div>
  );
};

export default Home;
