export default function heroesSorter(heroesList) {
    let result = [];
    heroesList.sort(function(first, second) {
        return second.health - first.health;
    });
    console.log(heroesList)
    return heroesList;
}