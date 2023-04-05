import healthStatusHandler from '../src/index';

test.each([
    [{name: 'Mage', health: 90}, 'healthy'],
    [{name: 'Warrior', health: 40}, 'wounded'],
    [{name: 'Priest', health: 10}, 'critical'],
])
('test health determiner', (data, status) => {
    const result = healthStatusHandler(data);
    expect(result).toBe(status);
})