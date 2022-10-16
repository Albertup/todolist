const input$$ = document.querySelector('input');
const button$$ = document.querySelector('.b-addTask > button');
button$$.addEventListener('click', addList);
input$$.addEventListener('keyup', (e) =>{
    (e.keyCode ===13 ? addList(e) : null);
})
function addList(e) {
    const notCompleted = document.querySelector('.b-todo');
    const completed = document.querySelector('.b-done');

    const li$$ = document.createElement('li');
    const checkBtn$$ = document.createElement('button');
    const delBtn$$ = document.createElement('button');
    checkBtn$$.innerHTML = '<i class="fa fa-check"></i>';
    delBtn$$.innerHTML = '<i class="fa fa-trash"></i>';

    if(input$$.value !==''){
        li$$.textContent = input$$.value;
        input$$.value = '';
        notCompleted.appendChild(li$$);
        li$$.appendChild(checkBtn$$);
        li$$.appendChild(delBtn$$);
    }
    checkBtn$$.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn$$.style.display = 'none';
    })
    delBtn$$.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    })
}