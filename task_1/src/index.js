export default function healthStatusHandler(characterData) {
    let health = characterData.health;
    if (health > 50) {
        return 'healthy'
    } else if (health > 14) {
        return 'wounded'
    } else {
        return 'critical'
    }
}