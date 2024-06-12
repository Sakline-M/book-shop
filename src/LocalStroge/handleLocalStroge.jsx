/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

const handleAddToLocalStorage = (book) => {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  if (books?.length === 0) {
    books = [book];
  }

  return console.log(books);
};

export default handleAddToLocalStorage;
