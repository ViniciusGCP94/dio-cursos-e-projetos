function determineElo(elo) {
    if (elo < 10) {
        return "Ferro";
    } else if (elo >= 10 && elo <= 20) {
        return "Bronze";
    } else if (elo >= 21 && elo <= 50) {
        return "Prata";
    } else if (elo >= 51 && elo <= 80) {
        return "Ouro";
    } else if (elo >= 81 && elo <= 90) {
        return "Diamante";
    } else if (elo >= 91 && elo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

module.exports = determineElo;