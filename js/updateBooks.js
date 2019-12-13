

;
const parameters = new URLSearchParams(window.location.search);
const bookId = parameters.get("bookId")
async function getBookList() {
    let bookJson = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/get/${bookId}`);
    let books = await bookJson.json();
    document.querySelector("#inputISBN").value = books.isbn
    document.querySelector("#inputBook").value = books.title
    document.querySelector("#inputFee").value = books.overdueFee
    document.querySelector("#inputPublisher").value = books.publisher
    document.querySelector("#inputDate").value = books.datePublished
}
getBookList();
document.querySelector("#postBook").addEventListener("click", updateBook)
const url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${bookId}`;

async function updateBook() {

    const data = {
        "isbn": document.querySelector("#inputISBN").value,
        "title": document.querySelector("#inputBook").value,
        "overdueFee": document.querySelector("#inputFee").value,
        "publisher": document.querySelector("#inputPublisher").value,
        "datePublished": document.querySelector("#inputDate").value
    };
    console.log(data)

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    console.log(json)

    alert("update succesful");


}