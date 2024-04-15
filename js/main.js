window.addEventListener('load',()=>{

    let idTarefa = 1

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
        idTarefa = idTarefa + 1
        tarefa = {'id':idTarefa, 'descricao':descricao.value,'local':local.value ,'horario':horario.value}
        localStorage.setItem(idTarefa,JSON.stringify(tarefa))

        // localStorage.setItem('descricao - '+idTarefa,descricao.value)
        // localStorage.setItem('local - '+idTarefa,local.value)
        // localStorage.setItem('horario - '+idTarefa,horario.value)

        // Atualizar Tabela
        var linha = document.createElement('tr')
        linha.id = idTarefa

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
        btnAlterar.addEventListener('click',()=>{
            console.log('logica de alterar')
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
        tblTarefa.appendChild(linha)

    })

    btLimpar.addEventListener('click',()=>{
        localStorage.clear()
    })


    


})