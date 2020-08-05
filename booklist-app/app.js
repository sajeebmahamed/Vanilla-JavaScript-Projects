const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

btn.addEventListener('click', function (event) {
    event.preventDefault()

    if (title.value == '' || isNaN(title.value) && author.value == '' || isNaN(author.value) && year.value == '' || isNaN(year.value)) {
        alert('Please fillup the form')
    }else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        const newAutor = document.createElement('th')
        newAutor.innerHTML = author.value
        newRow.appendChild(newAutor)

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow)
    
    }
})