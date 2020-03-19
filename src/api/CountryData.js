export async function getCountryData() {
    let [year, month, day] = new Date()
        .toISOString()
        .substr(0,10)
        .split('-')
    let isSuccess = false;
    let data;
    do {
        data = await makeRequest(day, month, year);
        if (!data) {
            [year, month, day] = new Date(new Date(year - 0, month - 1, day - 0) - 43200000)
                .toISOString()
                .substr(0,10)
                .split('-')
        }
        else isSuccess = true
    } while (!isSuccess);
    return data;
}

async function makeRequest(day, month, year) {
    let data = false;
    try {
        let resp = await fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${month}-${day}-${year}.csv`);
        if (resp.status === 200) data = await resp.text();
    } catch (e) {
        console.log(`Cannot find data for ${day}.${month}.${year}`)
    }

    return data;
}
