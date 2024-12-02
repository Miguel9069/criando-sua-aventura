const avaca = document.querySelectorAll('btn-proximo');

avanca.forEach(button => {
      button.addEventListener('click', fuction(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAtribute('data-proximo')

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
      })
}