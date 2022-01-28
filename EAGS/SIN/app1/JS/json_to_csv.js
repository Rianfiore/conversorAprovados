function jsonToCsv(fs, folderName) {

    const writeFile = fs.writeFile,
    readFile = fs.readFile, 
    csvjson = require('csvjson'),
    flagsfile = "./app1/JSON/"+folderName+".JSON", 
    jsonData = JSON.parse(fs.readFileSync(flagsfile))

    const results = [
        jsonData.map((data) => {
            return (
                {
                    NOME: data.NOME,
                    DATA_DE_NASCIMENTO: data.DATA_DE_NASCIMENTO
                }
            )
        })
    ];

    readFile(flagsfile, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            throw new Error(err);
        }

        const csvData = csvjson.toCSV(results, {
            headers: 'key'
        });

        writeFile('./app2/src/CSV/'+folderName+'.csv', csvData, (err) => {
            if (err) {
                console.log(err);
                throw new Error(err);
            }
        })
    })

    console.log("Valores convertidos para .CSV!")
}

module.exports = jsonToCsv;
