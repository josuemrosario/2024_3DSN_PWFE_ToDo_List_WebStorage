let idAlterar = 0
let maiorId = 0
let alterar = false

window.addEventListener('load',()=>{
    
    localStorage.clear()
    let idTarefa = 0
    

    btCadastrar = document.getElementById('btCadastrar')
    btLimpar = document.getElementById('btLimpar')
    tblTarefa = document.getElementById('tblTarefa')
    descricao = document.getElementById('descricao')
    local = document.getElementById('local')
    horario = document.getElementById('horario')
    btnOK = document.getElementById('btnOK')

    btnOK.addEventListener('click',()=>{
        

        // Cria chave no storage
        console.log('botao OK')

        console.log('idAlterar: ',idAlterar)

        if (idAlterar > 0) {

            idTarefa = idAlterar
            idAlterar = 0

            // logica atualizar a linha da tabela 
            linhaAlterar = document.getElementById("L" +idTarefa)
            
            console.log(linhaAlterar)

        } else {
            maiorId = maiorId + 1
            idTarefa = maiorId
                   
        }
        
        
        // Atualizar Tabela
        var linha = document.createElement('tr')
        linha.id = "L" + idTarefa
        
        var celulaid = document.createElement('th')
        celulaid.innerText = idTarefa

        var celulaTarefa = document.createElement('td')
        celulaTarefa.innerText = descricao.value

        var celulaLocal = document.createElement('td')
        celulaLocal.innerText = local.value

        var celulaHorario = document.createElement('td')
        celulaHorario.innerText = horario.value

        var celulaAcao = document.createElement('td')
        
        var btnAlterar = document.createElement('button')
        btnAlterar.id = idTarefa
        btnAlterar.type = 'button'
        btnAlterar.innerText = 'Alterar'
        btnAlterar.classList.add('btn')
        btnAlterar.classList.add('btn-warning')
        btnAlterar.classList.add('me-1')
        btnAlterar.addEventListener('click',(e)=>{
            console.log('logica de alterar')

            alterar = true
            //preencher valores
            item = JSON.parse(localStorage.getItem(e.target.id))
            console.log(item.descricao)

            descricao.value = item.descricao
            local.value = item.local
            horario.value = item.horario
            
            console.log(e.target.id)
            idAlterar = parseInt(e.target.id)

            // Mostra o modal com valores preenchidos
            var modtarefa = document.getElementById('tarefa')
            var modal = new bootstrap.Modal(modtarefa)
            modal.show()
        })
        celulaAcao.appendChild(btnAlterar)

        var btnExcluir = document.createElement('button')
        btnExcluir.id = idTarefa
        btnExcluir.type = 'button'
        btnExcluir.innerText = "Excluir"
        btnExcluir.classList.add('btn')
        btnExcluir.classList.add('btn-danger')
        btnExcluir.addEventListener('click',()=>{
            localStorage.removeItem(idTarefa)
            // document.querySelector('tbody#tblTarefa>tr[id="'+idTarefa+'"]').remove()
            linha.remove()
        })
        celulaAcao.appendChild(btnExcluir)
    
        linha.appendChild(celulaid)
        linha.appendChild(celulaTarefa)
        linha.appendChild(celulaLocal)
        linha.appendChild(celulaHorario)
        linha.appendChild(celulaAcao)
        
        if(alterar){
            document.getElementById("L" + idTarefa).replaceWith(linha);
            alterar = false
        }else{  
            tblTarefa.appendChild(linha)         
        }
        
        tarefa = {'id':idTarefa, 'descricao':descricao.value,'local':local.value ,'horario':horario.value}
        localStorage.setItem(idTarefa,JSON.stringify(tarefa))




        
        //limpa todos os campos
        descricao.value = ''
        local.value = ''
        horario.value = ''

    })

    btLimpar.addEventListener('click',()=>{
        localStorage.clear()
    })





    


})