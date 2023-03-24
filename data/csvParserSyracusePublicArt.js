// 1/16/23
// Note to self: CSV parsing works welll when you have data types such as integers.
// When you have data types such as long strings, or paragraphs, the csv parser is going to catch on every comma.
// The resulting data becomes fragmented. I saw an option on Google Sheets for tab separated values.
// TSV formatting may be something to explore.
const fs = require('fs');
const csv = fs.readFileSync('./Syracuse_Public_Art.csv', 'utf-8')
console.log(csv)

const parseCSV = (csv) => {
    // split the string into an array
    const data = csv.split('\n')
    // init state variable
    const parsedDataArr = []

    // loop over the array    
    for (let line of data){
        // process the array data
        const fields = line.split(',');
        // create the map object
        let placeHashMap = {};

        placeHashMap['X'] = fields[0]
        placeHashMap['Y'] = fields[1]
        placeHashMap['FID'] = fields[2]
        placeHashMap['Title'] = fields[3]
        placeHashMap['Type'] = fields[4]
        placeHashMap['Address'] = fields[5]
        placeHashMap['Latitude'] = fields[6]
        placeHashMap['Longitude'] = fields[7]
        placeHashMap['Artist_Last_'] = fields[8]
        placeHashMap['Artist_First'] = fields[9]
        placeHashMap['Additional_Artists'] = fields[10]
        placeHashMap['Media'] = fields[11]
        placeHashMap['Year_Created'] = fields[12]
        placeHashMap['Year_Erected'] = fields[13]
        placeHashMap['TNT_Area'] = fields[14]
        placeHashMap['Neighborhood'] = fields[15]
        placeHashMap['Specific_Location'] = fields[16]
        placeHashMap['Image_Url'] = fields[17]
        // add the map object to the array
        parsedDataArr.push(placeHashMap)
    }

    // return the state variable`
    return parsedDataArr
}

const parsedDataArray = parseCSV(csv)
console.log(parsedDataArray)
fs.writeFileSync("data.js", `var data = ${JSON.stringify(parsedDataArray)};`)


