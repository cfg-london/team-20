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
        let cell = rows[0][column];

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
        country: "Columbia",
        surveys: [
            {
                indicator: "Women giving birth by age 15",
                survey_full: "2015 DHS",
                survey_year: "2015",
                groups: {
                    "Total 20-49": 2.1,
                },
            },
        ],
    },
];


// TODO: Make sure we think about how this can be updated etc
const themes = [
    {
        Education: ["Women with secondary or higher education", "Median years of education completed [Women]", "Women who are literate"],
        Work: ["Women who worked in the last 12 months and are currently", "Women who decide themselves how their earnings are used", "Women who decide jointly with partner how their earnings are used", "Wife earns more than husband"],
        ReproductiveHealth: ["Women giving birth by age 15", "Women giving birth by age 18", "Married women currently using any method of contraception", "Married women currently using any modern method of contraception", "Unmet need for family planning", "Demand for family planning satisfied by modern methods", "No antenatal care"],
        Marriage: ["Women first married by exact age 15", "Women first married by exact age 18", ],
        Violence: ["Wife beating justified for at least one specific reason [Women]", "Women circumcised (FGC)", "Physical or sexual violence committed by husband/partner"],
    },
];
