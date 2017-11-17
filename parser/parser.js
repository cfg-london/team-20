const xlsx = require("xlsx");

console.log("Loading workbook...")

const workbook = xlsx.readFile("data.xlsx", {});
console.log("Workbook loaded.")

let sheet;

for (var sheetName in workbook.Sheets) {
    if (workbook.Sheets.hasOwnProperty(sheetName)) {
        var currSheet = workbook.Sheets[sheetName];
        if (sheetName != "Indicator Data") {
            console.log(`Unexpected sheet name '${sheetName}'.`)
            return;
        }

        sheet = currSheet;
    }
}

console.log("Sheet loaded.")

const sampleData = [
    {
        indicator: "Women giving birth by age 15",
        surveys: [
            {
                country: "Columbia",
                survey_full: "2015 DHS",
                survey_year: "2015",
                groups: [
                    ["Total 20-49", 2.1],
                ],
            },
        ],
    },
];
