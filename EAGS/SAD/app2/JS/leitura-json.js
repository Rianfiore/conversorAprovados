function leituraJson (fs, folderName) {

const flagsfile = '../../app1/JSON/'+folderName+'.json',
flagsfile2 = '../../app2/JSON/'+folderName+'_PROG.json',
flagsfile3 = './app2/JSON/'+folderName+'_RESULTADO.json',
alunos_aprov = require(flagsfile),
alunos_prog = require(flagsfile2)

let nome_prog, nome_aprov,nome_prog_normal,nome_aprov_normal
    resultado = [alunos_prog.length]

for (var i=0;i<alunos_prog.length;i++){
    nome_prog = alunos_prog[i].Nome
    nome_prog_normal = nome_prog.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    nome_prog_normal = nome_prog_normal.toUpperCase()
    
    for (var j = 0;j<alunos_aprov.length;j++){
        nome_aprov = alunos_aprov[j].NOME
        nome_aprov_normal = nome_aprov.normalize('NFD').replace(/[\u0300-\u036f]/g,'') 
        nome_aprov_normal = nome_aprov_normal.toUpperCase()
        
        if (nome_prog_normal==nome_aprov_normal && alunos_aprov[j].CLASSIFICACAO_FINAL != "**"){
                resultado[i] = {
                    "NOME": nome_aprov_normal,
                    "CLASSIFICACAO": alunos_aprov[j].CLASSIFICACAO_FINAL
                }
            
        }
    }
}

var resultado2, count2 = 0,count3 = 0

for (var i = 0; i<resultado.length;i++){
    if (resultado[i] != undefined && typeof(resultado[i]) != "number"){
        count2++
    }
}

resultado2 = [count2]

for (var i = 0; i<resultado.length;i++){
    if (resultado[i] != undefined && typeof(resultado[i]) != "number"){
        resultado2[count3] = resultado[i]
        count3++
    }
}

fs.writeFileSync(flagsfile3,JSON.stringify(resultado2,null,2))

}

module.exports = leituraJson