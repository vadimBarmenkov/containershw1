import {Team} from "../src/js/Team";
import {Character} from "../src/js/Character";

const charscter1 = new Character('Ivan', 1);
const charscter2 = new Character('Gosha', 2);
const charscter3 = new Character('Alex', 3);
const charscter4 = new Character('Mariya', 4);
const charscter5 = new Character('Sofia', 5);
const charscter6 = new Character('Oleg', 6);
const charscter7 = new Character('Regina', 7);

test('test add to team', () => {
    const team = new Team();
    team.add(charscter1);
    team.add(charscter3);
    team.add(charscter4);

    expect(() =>  {team.add(charscter1)}).toThrow(new Error('уже в вашей команде'));
    expect(team.toArray().length).toBe(3);
})

test('test addAll to team', ()  => {
    const team = new Team();
    team.add(charscter1);
    team.add(charscter3);
    team.add(charscter4);
    team.addAll(charscter2, charscter3, charscter4, charscter5, charscter6, charscter7);

    expect(team.toArray().length).toBe(7);
})

test('test addAll to team', ()  => {
    const team = new Team();
    team.addAll(charscter2, charscter3, charscter4, charscter6);

    expect(team.toArray()).toEqual([charscter2, charscter3, charscter4, charscter6]);
})
