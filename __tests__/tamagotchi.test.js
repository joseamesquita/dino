import {Tamagotchi} from '../src/tamagotchi'
import { JestEnvironment } from '@jest/environment';

describe("Tamagotchi", () => {
    jest.useFakeTimers();
    let tamagotchi;
    beforeEach( () => {
        tamagotchi = new Tamagotchi("Hiro");
    });

    afterEach( function() {
        jest.clearAllTimers();
    });

    test('if the power button is selected the tamagotchi wakes up', () => {
        expect(tamagotchi.wakeUp()).toEqual("Hello, I am Hiro");
    });

    test('check if the tamagotchi has been fed', () => {
        tamagotchi.setHunger();
        jest.advanceTimersByTime(3001);
        expect(tamagotchi.feed).toEqual(7);
    });

    test('test for decrement health value over time', () => {
        tamagotchi.setHealth();
        jest.advanceTimersByTime(25001);
        expect(tamagotchi.health).toEqual(75);
    });
    test('should increase the health every second the tamagotchi plays', () => {
        tamagotchi.play();
        jest.advanceTimersByTime(10001);
        expect(tamagotchi.health).toEqual(90);
    });


});