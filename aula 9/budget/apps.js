let ui_model = (function(){
    let DOMStrings = {
        inputMovimento: '#tipoMovimento',
        inputDescricao: '#descricao',
        inputValor: '#valor',
        btnSalvar: '#btnSalvar',
        tblRenda: '#tabelaRenda',
        tblDespesa: '#tabelaDespesa'
    }

    return {
        pegaValores : function(){
            return {
                tipoMovimento : document.querySelector(DOMStrings.inputMovimento).value,
                descricao : document.querySelector(DOMStrings.inputDescricao).value,
                valor : document.querySelector(DOMStrings.inputValor).value
            }
        },
        adicionaItemNaTabela : function(item, tMovimento){
            //1. Criar o HTML da linha
            let linha = document.createElement("tr");
            let colunaDescricao = document.createElement("td");
            let colunaValor = document.createElement("td");
            
            //2. Colocar os valores nas colunas
            colunaDescricao.textContent = item.descricao;
            colunaValor.textContent = item.valor;

            //3.Incluir as colunas no linha
            linha.appendChild(colunaDescricao);
            linha.appendChild(colunaValor);

            //4. Qual é a tabela que vamos usar
            let tabela;
            if(tMovimento === "renda"){
                tabela = document.querySelector(DOMStrings.tblRenda);
            }else{
                tabela = document.querySelector(DOMStrings.tblDespesa);
            }

            //5. incluir a linha na tabela
            tabela.appendChild(linha);
        },

        getDOMStrings: function(){
            return DOMStrings;
        }
    };
})(); //Os ultimos dois parenteses são para executar a função (IIFE - Immediately Invoked Function Expression)

data_model = (function(){
    let Despesa = function(id, descricao, valor){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    };

    let Renda = function(id, descricao, valor){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    };

    let dados = {
        items: {            //Guardar cada item em seu tipo de movimento
            despesa: [],   //array de items de despesa
            renda: [],      //array de intems de renda
        },
        totais: {
            despesa: 0,
            renda: 0,
        }
    };

    return {
        adicionarItem: function(tMovimento, descricao, valor){
            //Regra do ID: pegar o ultimo elemento e somar 1 no valor do ID
            let id = 0;
            let tamanhoArray = dados.items[tMovimento].length;
            if(tamanhoArray > 0){
                id = dados.items[tMovimento][tamanhoArray - 1].id + 1; //retorna o ultimo id do array somado a 1
            }

            let novoItem;
            switch(tMovimento){
                case 'renda':
                    novoItem = new Renda(id, descricao, valor);
                    break;
                case 'despesa':
                    novoItem = new Despesa(id, descricao, valor);
                    break;
            };

            dados.items[tMovimento].push(novoItem);
            return novoItem;
        },

        funcaoparatestar: function(){
            //Função apra testar se os dados estão ok!
            console.log(dados);
        }
    }
})();

controller = function(ui, data){
    let adicionarItem = function(){
        //1.Pegar os valores dos inputs
        let input = ui.pegaValores();
        //console.log(input);
        //2.Adicionar o item na nossa estrutura de dados
        let novoItem = data.adicionarItem(input.tipoMovimento, input.descricao, input.valor)
        //console.log(novoItem);
        //3.Adicionar na nossa UI (tabela) a entrada
        ui.adicionaItemNaTabela(novoItem, input.tipoMovimento);
        //4.Calcular o novo budget total
        //5.Atualizar a UI (totais)
    };

    let configuraOsListeners = function(){
        let DOMStrings = ui.getDOMStrings();

        document.querySelector(DOMStrings.btnSalvar).addEventListener('click', function(){
            adicionarItem();
            //console.log('Clicou no botão')
        });
        document.addEventListener('keyup', function(event){
            if(event.key === 'Enter'){
                adicionarItem();
                //console.log('O Enter foi clicado');
            }
        });
    }

    return {
        init: function(){
            console.log('Inicia a aplicação!');
            configuraOsListeners();
        }
    }
};

controller(ui_model, data_model).init();