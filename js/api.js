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

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            mostrarDatosClima(data);
            console.log(data);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    

    const mostrarDatosClima = (datos) => {
        const datosClimaDiv = document.getElementById('datosClima');

        const location = document.createElement('h3');
        location.innerText = `Ubicación: ${datos.location.name}, ${datos.location.region}`;

        const temperature = document.createElement('p');
        temperature.innerText = `Temperatura: ${datos.current.temp_c}°C`;

        const condition = document.createElement('p');
        condition.innerText = `Condición: ${datos.current.condition.text}`;

        datosClimaDiv.appendChild(location);
        datosClimaDiv.appendChild(temperature);
        datosClimaDiv.appendChild(condition);
    };

    obtenerDatosClima();
})