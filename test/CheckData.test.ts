import {describe, expect, test} from "vitest";

describe('Check nav bar menu items', () => {
    const setOfMenuItemsInTheNavbar = [
        [],
        ['Лаборатория'],
        ['Лаборатория', 'Новые артефакты'],
        ['Лаборатория', 'Новые артефакты', 'Контакты'],
        ['Лаборатория', 'Новые артефакты', 'Контакты', 'О нас'],
        ['Лаборатория', 'Новые артефакты', 'Контакты', 'О нас', 'Бред сивой кобылы']
    ];
    test('Количество пунктов в навбаре не более 4-х', () => {
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[0])).toThrowError(new ErrorCreatingMenuItems('empty list'));
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[1])).not.toThrowError();
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[2])).not.toThrowError();
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[3])).not.toThrowError();
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[4])).not.toThrowError();
        expect.soft(() => new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[5])).toThrowError(new ErrorCreatingMenuItems('too many menu items (there should be no more than four)'));
    });

    test('Тексты пунктов навбара в порядке', () => {
        const menuItemsInTheNavbar: SetOfMenuItemsInTheNavbar = new SetOfMenuItemsInTheNavbar(setOfMenuItemsInTheNavbar[4]);
        test('Количество символов не превышает норму', () => {
            menuItemsInTheNavbar.getItems.forEach((menuItem: string) =>
                expect.soft(menuItem.length).toBeLessThan(10)
            )
        });
        test('Каждый пункт не состоит из пробелов', () => {
            const pattern = /^\s+$/g;
            menuItemsInTheNavbar.getItems.forEach((menuItem: string) => {
                expect.soft(menuItem.length).not.toBe('');
                expect.soft(pattern.test(menuItem)).toBeTruthy();
            });
        });
    });
});

describe('Check wrapper data', () => {
    test('Заголовок баннера в порядке', () => {

    });

    test('Описание баннера в порядке', () => {

    });
});