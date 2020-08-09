document.querySelector("#add-time") //procurar o botao
.addEventListener("click", cloneField) //quando clicar no botao fazer algo

function cloneField() { 
    
    //ação a ser executada

    //duplicar campo, que campo?

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) 
    
    //cloneNode refere a uma estrutura html

    //antes de colocar na pagina tem que limpar os campos. que campos??

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {

        //pega o field do momento e limpa ele

        field.value = ""
    })


    // colocar na pagina, onde???

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}