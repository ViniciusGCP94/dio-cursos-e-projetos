//Faça uma função que retorne datas dentro de um texto.A função deve receber uma string e retornar um array com as datas encontradas. As datas podem estar no formato dd/mm/aaaa, dd-mm-aaaa ou dd/mm/aa. Se não houver datas, retorne a mensagem de erro "Data não encontrada".
//Se a data for antes de 2000 deve retornar somente no formato dd/mm/aaaa, dd-mm-aaaa.


function findDates(text) {
    const regex = /(\d{2}[\/-]\d{2}[\/-]\d{4}|\d{2}[\/-]\d{2}[\/-]\d{2})/g;
    const matches = text.match(regex);
    if (!matches) {
        return 'Data não encontrada';
    }

    const dates = matches.map(date => {
        const parts = date.split(/[-\/]/);
        const day = parts[0];
        const month = parts[1];
        const year = parts[2].length === 2 ? '20' + parts[2] : parts[2];

        if (parseInt(year) < 2000) {
            return `${day}/${month}/${year}`;
        } else {
            return date;
        }
    });

    return dates;
}