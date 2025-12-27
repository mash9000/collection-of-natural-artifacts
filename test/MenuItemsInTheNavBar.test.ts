import {describe, expect, test} from "vitest";
import {AppConfig} from "../src/model/AppConfig";
import {IMenuItemsInTheNavBar} from "../src/model/IMenuItemsInTheNavBar";
import {ErrorCreatingMenuItems} from "../src/model/ErrorCreatingMenuItems";
import {ExampleOfMenuItems} from "../src/data/ExampleOfMenuItems";

const getSamplesOfTheIMenuItemsInTheNavBarInterface = (): IMenuItemsInTheNavBar[] => {
    return [
        new ExampleOfMenuItems([]),
        new ExampleOfMenuItems(['Контакты']),
        new ExampleOfMenuItems(['Контакты', 'Лаборатория']),
        new ExampleOfMenuItems(['Контакты', 'Лаборатория', 'Артефакты']),
        new ExampleOfMenuItems(['Контакты', 'Лаборатория', 'Артефакты', 'Связь']),
        new ExampleOfMenuItems(['Контакты', 'Лаборатория', 'Артефакты', 'Связь', 'Бред сивой кобылы']),
    ];
}

describe('Проверка пунктов меню', () => {
    describe(`Количество пунктов меню от ${AppConfig.getTheMinimumNumberOfMenuItems()} до ${AppConfig.getTheMaximumNumberOfMenuItems()}`, () => {
        test('Особый случай: пустой массив образцов', () => {
            expect.soft(() => getSamplesOfTheIMenuItemsInTheNavBarInterface()[0].getItems()).toThrowError(new ErrorCreatingMenuItems('array is empty'));
        });

        test('Особый случай: всего один элемент в массиве ', () => {
            expect.soft(() => getSamplesOfTheIMenuItemsInTheNavBarInterface()[1].getItems()).toThrowError(new ErrorCreatingMenuItems(`minimum number of menu items - ${AppConfig.getTheMinimumNumberOfMenuItems()}`));
        });

        test.each(getSamplesOfTheIMenuItemsInTheNavBarInterface().slice(2, 5))('Обработка массива %s', (array: IMenuItemsInTheNavBar) => {
            expect.soft(array.getItems().length).toBeGreaterThanOrEqual(AppConfig.getTheMinimumNumberOfMenuItems());
            expect.soft(array.getItems().length).toBeLessThanOrEqual(AppConfig.getTheMaximumNumberOfMenuItems());
        });
    });

    describe('Пункты меню в нормальном виде', () => {
        test.each(getSamplesOfTheIMenuItemsInTheNavBarInterface().slice(2, 5))('Обработка пункта "%s"', (array: IMenuItemsInTheNavBar) => {
            const pattern = /^\s+$/g;
            array.getItems().map((item: string) => {
                expect.soft(pattern.test(item)).toBeFalsy();
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheMenuItemString());
            });
        });
    })
});