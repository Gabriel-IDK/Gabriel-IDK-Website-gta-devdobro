const botao = document.querySelector(".plataform_btn");
/*Busca por seletores (.), Busca por classes como id (#), aplicado em queries*/

const elementoPlataformas = document.querySelector(".plataform_btn .plataformas");

botao.addEventListener("click", () => {//Função de seta identifica o click do mouse

    //Objetivo 2 ===================================================================

    // const openbutton = elementoPlataformas.classList.contains("ativo");
    // if (openbutton){
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }
    
    elementoPlataformas.classList.toggle("ativo"); //Serve como interruptor
});

//Log pode ser utilizado para verificar se suas ações no js estão funcionando.
// Refatorar significar o processo de melhorar o código após o deixa-lo responsivo
// Ctrl+; Comenta o código