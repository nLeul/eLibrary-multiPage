
document.querySelector("#postBook").addEventListener("click", addBooks)
const url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/add`;

async function addBooks() {

    const data = {
        "isbn": document.querySelector("#inputISBN").value,
        "title": document.querySelector("#inputBook").value,
        "overdueFee": document.querySelector("#inputFee").value,
        "publisher": document.querySelector("#inputPublisher").value,
        "datePublished": document.querySelector("#inputDate").value
    };
    console.log(data)
    alert("hello")
    const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    console.log(json)

    alert("post succesful");


}

