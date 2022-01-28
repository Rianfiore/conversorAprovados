function csvToJson(fs, folderName){
    const csvjson = require('csvjson'),
    writeFile = fs.writeFileSync,
    readFile = fs.readFileSync, 
    flagsfile = "./app2/src/CSV/"+folderName+" - PROG.csv", flagsfile2 = './app2/JSON/'+folderName+'_PROG.json',
    csvData = readFile(flagsfile, { enconding: 'utf-8'});
    
    const jsonData = csvjson.toObject(csvData.toString())
    
    writeFile(flagsfile2,JSON.stringify(jsonData,null, 2))
}

console.log("Valores convertidos para .JSON!")

module.exports = csvToJson