import {sumFunction} from '../src/functions';


test('Add 2 + 2 to equal 4', () => {
    expect(sumFunction(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 4', () => {
    expect(sumFunction(2, 2)).not.toBe(5);
});