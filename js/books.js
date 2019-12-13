const tableBody = document.querySelector("tbody");
async function getBookList() {
    let bookJson = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
    let books = await bookJson.json();
    books.forEach(element => {
        const tr = document.createElement("tr");
        const aTag = document.createElement('a');
        const btn = document.createElement('a');
        aTag.setAttribute('href', `editbook.html?bookId=${element.bookId}`);
        btn.setAttribute('data-toggle', `modal`);
        btn.setAttribute('data-studentid', `${element.bookId}`);
        btn.setAttribute('data-studentid', `${element.bookId}`);
        btn.setAttribute('href', `#exampleModal`);
        // data - toggle="modal" data - studentid="100061" data - firstname="John
        for (let val in element) {
            const td = document.createElement("td");
            aTag.innerText = `Edit`;
            btn.innerText = `                                Delete`;
            td.textContent = element[val];
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);

        tr.appendChild(aTag);
        tr.appendChild(btn);
    });
}
getBookList();

$(document).ready(function () {
    $("#exampleModal").on("show.bs.modal", function (event) {
        const link = $(event.relatedTarget);
        const studentId = link.data("studentid");
        const firstName = link.data("firstname");
        const lastName = link.data("lastname");
        const modal = $(this);
        console.log(studentId)
        // To present the data, use this:
        // modal.find("#studentId").text("Student ID: " + studentId);
        // modal.find("#firstName").text("First Name: " + firstName);
        // modal.find("#lastName").text("Last Name: " + lastName);

        // Or use JQuery:
        $("#isbn ").text("isbn: " + studentId);
        $("#title").text("title: " + firstName);
        $("#overdueFee").text("overdueFee: " + lastName);
        $("#publisher").text("publisher: " + lastName);
        $("#datePublished").text("datePublished: " + lastName);
        document.getElementById("deleteModalId").addEventListener("click", function deleteValue() {
            fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${studentId}`, {
                method: "DELETE"
            })
         $("#exampleModal").modal("hide")
        })
    });
});
