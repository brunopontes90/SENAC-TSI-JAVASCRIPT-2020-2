/**
 * JavaScript é Assíncrono
 */
/*
const segunda = () => {
    setTimeout(() => {
        console.log('segunda');
    },2000);
};

const primeira = () => {
    console.log('primeira');
    segunda();
    console.log('Fim!');
}

primeira();
*/
/**
 * Carregar dados
 */
/*
function recebeValores(){
    setTimeout(() => {
        const receitaID = [523, 883, 432, 974];
        console.log(receitaID);

        setTimeout((receitaID) => {
            const receita = {
                receitaID: receitaID,
                titulo: 'Beirute Vegano',
                user: 'TSI'
            };
            console.log(receita);

            setTimeout((user) => {
                const sugestoes = {
                    titulo : 'Sopa do HC',
                    user: user
                };
                console.log(sugestoes);

            }, 1500, receita.user);
        }, 1500, receitaID[0]);
    }, 1500);
}
recebeValores();
*/
/**
 * Prmise (Promessa)
 */
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        let ids = [523, 883, 432, 974];
        //ids = null;
        if(ids)
            resolve(ids);
        else
            reject('Não encontramos dados!');
    }, 1500);
});

const getReceita = ((id) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let receita = {
                titulo : "Beirute Vegano",
                user : "TSI",
                id: id
            }
            //receita = null;
            if(receita)
                resolve(receita);
            else
                reject('Não encontramos dados!');
        }, 1500);
    });
});

const getSugestao = ((user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sugestao = {
                title: "Sopa de Cebola do HC",
                user: user
            };
            if(sugestao)
                resolve(sugestao);
            else
                reject('Não encontramos dados!'); 
        }, 1500);
    });
});

/*
getIDs
    .then((ids) => {
        //Caso ele me retorne ID
        console.log(ids);
        return getReceita(ids[0])
    })
    .then((receita) => {
        console.log(receita);
        return getSugestao(receita.user);
    })
    .then((sugestao) => {
        console.log(sugestao);
    })
    .catch((error) => {
        //Caso ele retorne um erro
        console.log(error);
    });
*/

/**
 * Async Await
 */
/*
console.log("Entrei");
async function getReceitaAW(){
    const ids = await getIDs;
    console.log(ids);
    const receita = await getReceita(ids[0]);
    console.log(receita);
    const sugestao = await getSugestao(receita.user);
    console.log(sugestao);

    return data = {
        ids : ids,
        receita : receita,
        sugestao : sugestao
    };
}
getReceitaAW().then((dados) => {
    console.log(dados);
});
console.log("Terminei");
*/

/**
 * AJAX
 */
let url = 'https://api.randomuser.me/';
fetch(url)
    .then(result => {
        return result.json();
    })
    .then(dados => {
        dados = dados.results[0];
        dados = {
            email : dados.email,
            gender : dados.gender,
            name : `${dados.name.first} ${dados.name.last}`
        }
        console.log(dados);
    }).catch((error) => {
        console.log(error);
    });