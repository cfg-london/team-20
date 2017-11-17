const xlsx = require("xlsx");
const csv = require("csvtojson");

function getIndicatorColumns(rows) {
    const indicators = {
        // "indicator": [columnInt, columnInt]
    };

    // Assume initiail indicator name is "Indicator"
    let indicatorName;
    let indicatorColumns;

    // We don't care about the title "Indicator"
    let started = false;

    // Note: start from column 2, skipping "Indicator"
    for (var column = 2; column < rows[0].length; column++) {
        var cell = rows[0][column];

        // If we encounter a non-empty cell...
        if (cell !== "") {
            // Don't save if there's no previous
            if (started) {
                indicators[indicatorName] = indicatorColumns;
            }

            indicatorName = cell;
            indicatorColumns = [];

            started = true;
        }

        indicatorColumns.push(column);
    }

    // Add the last indicator
    indicators[indicatorName] = indicatorColumns;

    return indicators;
}

function parse(rows) {
    const indicatorColumns = getIndicatorColumns(rows);
    console.log(indicatorColumns);
}

function load() {
    console.log("Loading workbook...")

    const workbook = xlsx.readFile("data.xlsx", {});
    console.log("Workbook loaded.")

    let sheet;

    for (var sheetName in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheetName)) {
            var currSheet = workbook.Sheets[sheetName];
            if (sheetName !== "Indicator Data") {
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
