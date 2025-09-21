const form = document.querySelector('#form')
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const qqq = document.querySelector('#qqq')
const ul = document.querySelector('#ul')
const li = document.querySelectorAll('li')

    button.addEventListener('click', function(event) {
        event.preventDefault()
        const newLi = document.createElement('li')
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Удалить'
        delBtn.style.marginLeft = '10px'
        const liText = input.value.trim()
        newLi.textContent = liText
        newLi.appendChild(delBtn)
        ul.appendChild(newLi)
        input.value = ''

        delBtn.addEventListener('click', function() {
            newLi.remove()
        })

        newLi.addEventListener('dblclick', function(event) {
            event.stopPropagation()
            const edit = prompt(`Изменить: ${liText}`)
            newLi.textContent = edit
            newLi.appendChild(delBtn)
                alert(`${liText} изменен на ${edit}`)
        })
    })

    qqq.addEventListener('click', function(event) {
        event.preventDefault()
        window.location.href = 'index2.html'
    })