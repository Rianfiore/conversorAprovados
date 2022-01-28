const path = require('path'),
fs = require('fs'),
csvToJson = require('./app2/JS/csv_to_json.js'),
leituraJson = require('./app2/JS/leitura-json.js');
folderName = path.basename(__dirname)

console.log("Convertendo .CSV para .JSON...")
csvToJson(fs, folderName)
leituraJson(fs, folderName)
console.log("Conversão feita com sucesso! Arquivo final '" + folderName + "_RESULTADO.json' inserido no caminho './app2/JSON'")