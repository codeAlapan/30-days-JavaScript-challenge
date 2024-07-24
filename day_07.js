//* Activity 1: Object Creation and Access
// Create an object representing a book with properties like title, author, and year, and log the object to the console.
const bookDetails = {
  title: "How to Win Friends and Influence People",
  author: "Dale Carnegie",
  year: 1937,
};
console.log(bookDetails);
// Access and log the title and author properties of the book object.
// method1
console.log(bookDetails.author);
console.log(bookDetails.title);
// method2
console.log(bookDetails["title"]);
console.log(bookDetails["author"]);
//* Activity 2: Object Methods
//  Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
bookDetails.bookSummary = function () {
  return `Title::${this.title} Author::${this.title}`;
};
console.log(bookDetails.bookSummary());
//   Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
bookDetails.updateYear = function (newYear = 1937) {
  this.year = newYear;
};
bookDetails.updateYear(2024);
console.log(bookDetails.year);

//*   Activity 3: Nested Objects
//   Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "math",
  books: [
    {
        title: "Algebra",
        author: "Author1",
        year: 2021
    },
    {
        title: "Geometry",
        author: "Author2",
        year: 2022
    },
    {
        title: "Aptitude",
        author: "Author3",
        year: 2023
    }
]
};
console.log(library.books);
//   Access and log the name of the library and the titles of all the books in the library.
console.log(library["name"]);
for(let i=0;i<library.books.length;i++)
{
// console.log("Book",i+1,":",library.books[i].title)
console.log(`Book${i+1}`,library.books[i].title)
}

//*   Activity 4: The "this" keyword
//   Add a method to the book object that uses the "this" keyword to return a string with the book's title and year, and log the result of calling this method.
bookDetails.bookSummary2 = function () {
    return `Title::${this.title}, Year::${this.year}`;
  };
  console.log(bookDetails.bookSummary2())

//*   Activity 5: Object Iteration
//   Use a "for in"  loop to iterate over the properties of the book object and log each property and its value.
for (const key in bookDetails) {
    console.log(`${key}->${bookDetails[key]}`)
  }

//   Use "Object.keys" and "Object.values"  methods to log all the keys and values of the book object.
console.log(Object.keys(bookDetails));
console.log(Object.values(bookDetails));
