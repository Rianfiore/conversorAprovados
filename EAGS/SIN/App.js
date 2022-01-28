
const path = require('path')
const limpaTexto = require('./app1/JS/limpa_texto'), 
jsonToCsv = require('./app1/JS/json_to_csv.js'), 
fs = require('fs'),
folderName = path.basename(__dirname)

console.log("Convertendo .txt para .JSON...")
limpaTexto(fs, folderName)
console.log("Convertendo .JSON para .CSV...")
jsonToCsv(fs, folderName)
console.log("Conversão feita com sucesso, arquivo final '" + folderName + ".csv' inserido no caminho './app2/src/CSV'") 
/console.log("Por favor insira o arquivo com os alunos identificados em './app2/CSV' com o nome: '" + folderName + " - PROG.csv'")