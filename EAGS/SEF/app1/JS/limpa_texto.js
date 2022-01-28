
function limpaTexto (fs, folderName) {

//#region Parte 1

//#region Variáveis

//--------------------------------DECLARAÇÃO BASE DE VARIÁVEIS---------------------------------------///

//#region Input e Output de arquivos
const flagsfile = "./app1/src/TXT/"+folderName+" RELAÇÃO.txt", flagsfile2 = "./app1/JSON/"+folderName+".json"

//#endregion

//#region Outras variáveis


fs.readFileSync(flagsfile, 'utf-8')

let texto = fs.readFileSync(flagsfile, 'utf8'), texto2 = texto.split(/\r\n|\r|\n/), texto3, texto3_count = 0, first_count_space = true, count_spaces = 135

//#endregion

//---------------------------------------FIM DA DECLARAÇÃO-------------------------------------------//

//#endregion

//#region Limpeza de dados

//-----------------------RECONHECIMENTO DE PADRONIZAÇÃO E CORREÇÃO DE LINHAS INÚTEIS-----------------//

//#region Limpar Início e Fim

console.log("Limpando início e fim de cada linha...")

texto3 = [texto2.length]


for (var count=10;count<texto2.length-7;count++) {

    texto3[texto3_count] = texto2[count]
    texto3_count++
}

//#endregion

//#region Limpar Cabeçalhos Indesejáveis

console.log("Limpando cabeçalhos indesejáveis...")
for (var i=0;i<texto3.length;i++){

    if (i==67 && first_count_space) {

        for (var j = 1; j <=12; j++){

            texto3.splice(i,1)

        }

        first_count_space = false;

    }

    if  (i==count_spaces && first_count_space == false) {

        for (var k = 1; k <=12; k++){

           texto3.splice(i,1)

        }
        count_spaces+= 68
    }
}

//#endregion

//#region Limpar Linhas Vazias

console.log("Limpando linhas vazias...")
first_count_space = true;
for (var l = 0; l <texto3.length;l++){

    if (texto3[l] == '""'){

        texto3.splice(l,1)
    }
}

//#endregion

//---------------------------------------FIM DO ALGORITMO-------------------------------------------//

//#endregion

//#endregion

//#region Parte 2

//#region Variáveis

//--------------------------------DECLARAÇÃO BASE DE VARIÁVEIS---------------------------------------///

var frase, palavra = "", caractere, nextCaractere, linha = 0, valores = [9], registro, v = 0, char = 0

//---------------------------------------FIM DA DECLARAÇÃO-------------------------------------------//

//#endregion

//#region Conversão para JSON

//-------------------------------CAPTURA DE DADOS E CONVERSÃO PARA JSON--------------------------------//

//#region Captura de Valores

console.log("Capturando valores para conversão...")

registro = [texto3.length]

for (linha = 0; linha < texto3.length;linha++){
    frase = texto3[linha]

    if (linha == (texto3.length-1)){
        const separador = ""
    }
    for (char = 0; char <= frase.length;char++){
        caractere = frase.charAt(char)
        nextCaractere = frase.charAt(char+1)
        
        if (caractere == '"' && nextCaractere == ""){
            if (palavra.charAt(0) == " "){
                 palavra = palavra.slice(1,palavra.length)
             }
            valores[v] = palavra
            palavra = ""
            v=0
        }

        if (caractere == " " && nextCaractere == " "){
            caractere = frase.charAt(char)
            if (palavra != "") {

                if (palavra.charAt(0) == " "){
                    palavra = palavra.slice(1,palavra.length)
                }

                valores[v] = palavra
                v++
                palavra = ""
            }
            while (nextCaractere == " "){
                nextCaractere++
            }

        } else if (caractere != '"') {
                var previousCaractere = frase.charAt(char-1)

                if (caractere == " " && previousCaractere == " "){
                    caractere = ""
                    palavra = palavra + caractere
                }
                if (caractere != '"') {
                    caractere = frase.charAt(char)
                    palavra = palavra + caractere
                }
            }
    }

    //#endregion

//#region Definir valores em JSON

    registro[linha] = { 
            "NOME":valores[0],
            "INSCRICAO":valores[1],
            "SITUACAO":valores[2],
            "SITUACAO_FINAL":valores[3],
            "CLASSIFICACAO_PROVISORIA":valores[4],
            "CLASSIFICACAO_FINAL":valores[5],
            "MEDIA_DA_PROVA":valores[6],
            "PORTUGUES":valores[7],
            "ESPECIFICA":valores[8],
            "DATA_DE_NASCIMENTO":valores[9]
        }
}

console.log('Os valores convertidos foram definidos para .JSON!')

//Criando arquivo final

fs.writeFileSync(flagsfile2,JSON.stringify(registro,null,2))

//#endregion

//------------------------------------------FIM DO ALGORITMO-------------------------------------------//

//#endregion

//#endregion

}
module.exports = limpaTexto;