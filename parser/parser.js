const xlsx = require("xlsx");
const csv = require("csvtojson");

function parse(rows) {
    const indicators = [
        // "indicator": [columnInt, columnInt]
    ];

    // Read the first row to build the indicators
    let indicatorName = "Indicator";
    let indicatorColumns = [];
    let started = false;
    for (var column = 0; column < rows[0].length; column++) {
        var cell = rows[0][column];

        if (cell !== "") {
            if (indicatorName !== "Indicator") {
                console.log(indicatorName, indicatorColumns);
            }

            indicatorName = cell;
            indicatorColumns = [];
            started = true;
        }

        // Skip if the current indicator is "Indicator"
        if (indicatorName === "Indicator") {
            continue;
        }

        indicatorColumns.push(column);
    }
}

function load() {
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

    const csvContent = xlsx.utils.sheet_to_csv(sheet);
    const rows = [];

    csv({noheader: true})
        .fromString(csvContent)
        .on('csv', line => {
            rows.push(line);
        })
        .on('done', err => {
            if (err != null) {
                console.log("An error was encountered parsing the converted csv.");
                return;
            }

            parse(rows);
        });
}

load();

const sampleData = [
    {
        indicator: "Women giving birth by age 15",
        surveys: [
            {
                country: "Columbia",
                survey_full: "2015 DHS",
                survey_year: "2015",
                groups: {
                    "Total 20-49": 2.1,
                },
            },
        ],
    },
];
