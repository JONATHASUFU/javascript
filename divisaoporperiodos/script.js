document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
         reader.onload = function(event) {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
            
                console.log("Conteúdo do arquivo Excel:", rows);    

            // Assumindo que o primeiro sheet é o que queremos processar
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });

            // Remover cabeçalho se necessário
            if (rows[0][0] === 'Data Início') {
                rows.shift();
            }

            const resultados = document.getElementById('resultados');
            resultados.innerHTML = '';

            rows.forEach((linha, index) => {
                const [dataInicioStr, dataFimStr] = linha;
                if (dataInicioStr && dataFimStr) {
                    console.log(`Linha ${index + 2} - Data Início: ${dataInicioStr}, Data Fim: ${dataFimStr}`);

                    const resultado = processarIntervalo(dataInicioStr, dataFimStr);
                    resultados.innerHTML += `<h3>Intervalos para linha ${index + 2}:</h3>`;
                    if (resultado.length > 0) {
                        resultado.forEach(r => resultados.innerHTML += `${r}<br>`);
                    } else {
                        resultados.innerHTML += "Nenhum intervalo encontrado.<br>";
                    }
                } else {
                    resultados.innerHTML += `<h3>Dados inválidos na linha ${index + 2}</h3>`;
                }
            });
        };

        reader.readAsArrayBuffer(file);
    }
});

function processarIntervalo(dataInicioStr, dataFimStr) {
    const resultados = [];
    const format = 'DD/MM/YYYY';

    // Garantir que as datas estão no formato correto
    const dataAtual = moment(dataInicioStr, format, true);
    const dataFim = moment(dataFimStr, format, true);

    if (!dataAtual.isValid() || !dataFim.isValid()) {
        console.error(`Formato de data inválido: ${dataInicioStr} ou ${dataFimStr}`);
        return resultados;
    }

    while (dataAtual <= dataFim) {
        let dataProximoMes = dataAtual.clone().add(1, 'months').startOf('month').subtract(1, 'days');

        if (dataProximoMes.isAfter(dataFim)) {
            dataProximoMes = dataFim.clone();
        }

        resultados.push(`Período: ${dataAtual.format(format)} - ${dataProximoMes.format(format)}`);

        dataAtual.add(1, 'days');
    }

    return resultados;
}

