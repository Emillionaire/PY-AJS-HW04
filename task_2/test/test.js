import heroesSorter from '../src/index';

test.each([
    [
        [
            {name: 'Mage', health: 90},{name: 'Warrior', health: 40},{name: 'Priest', health: 10}
        ],
        [
            {name: 'Mage', health: 90},{name: 'Warrior', health: 40},{name: 'Priest', health: 10}
        ],
    ],
    [
        [
            {name: 'Mage', health: 10},{name: 'Warrior', health: 80},{name: 'Priest', health: 40}
        ],
        [
            {name: 'Warrior', health: 80},{name: 'Priest', health: 40},{name: 'Mage', health: 10}
        ],
    ],
])
('test health determiner', (data, res) => {
    const result = heroesSorter(data);
    expect(result).toEqual(res);
})