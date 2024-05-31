document.addEventListener("DOMContentLoaded", () => {
    const obtenerDatosClima = async () => {
        const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07ae67a5cbmsh47b931267c930a0p1c567fjsn700e978f22f6',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };
    }
})