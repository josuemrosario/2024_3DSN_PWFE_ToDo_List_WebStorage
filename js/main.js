window.addEventListener('load',()=>{

    btCadastrar = document.getElementById('btCadastrar')
    btLimpar = document.getElementById('btLimpar')
    tblTarefa = document.getElementById('tblTarefa')
    descricao = document.getElementById('descricao')
    local = document.getElementById('local')
    horario = document.getElementById('horario')
    btnOK = document.getElementById('btnOK')

    btnOK.addEventListener('click',()=>{
        console.log('botao OK')
        localStorage.setItem('descricao',descricao.value)
        localStorage.setItem('local',local.value)
        localStorage.setItem('horario',horario.value)
    })


})