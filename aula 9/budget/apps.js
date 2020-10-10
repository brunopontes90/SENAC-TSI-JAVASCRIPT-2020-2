ui_model = function() {
    return {
        pegaValores: function() {
            return {
                tipoMovimento: document.querySelector('#tipoMovimento').value,
                descricao: document.querySelector('#descricao').value,
                valor: document.querySelector('#valor').value
            }
        }
    }
};


data_model = function() {

};

controller = function(ui, data) {
    let adicionarItem = function() {
        //1.Pega os valores dos inputs
        console.log(ui().pegaValores());
        //2.Adiciona o item na nossa estrutura de dados
        //3.Adicionar na nossa UI (tabela) a entreda
        //4.Calcular o novo budget total
        //5.Atualizar a UI(totais)
        console.log('Adicionado o item');
    }

    let configuraOsListeners = function() {
        document.querySelector('#btnSalvar').addEventListener('click', function() {
            adicionarItem();
            console.log('Clicou no botão');
        });
        document.addEventListener('keyup', function(event) { //event pega o evento do keyup
            if (event.key === 'Enter') {
                adicionarItem();
                console.log('O enter foi clicado');
            }
        })
    }
    return {
        init: function() {
            console.log('Inicia a aplicação');
            configuraOsListeners();
        }
    }


};

controller(ui_model, data_model).init();