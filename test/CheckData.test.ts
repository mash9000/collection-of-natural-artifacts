import {describe, expect, test} from "vitest";
import {AppConfig} from "../src/model/AppConfig";
import {IMenuItemsInTheNavBar} from "../src/model/IMenuItemsInTheNavBar";
import {ErrorCreatingMenuItems} from "../src/model/ErrorCreatingMenuItems";

const getSamplesOfTheIMenuItemsInTheNavBarInterface = (): IMenuItemsInTheNavBar[] => {
    return [];
}

describe('Проверка пунктов меню', () => {
    describe(`Количество пунктов меню от ${AppConfig.takeTheMinimumNumberOfMenuItems()} до ${AppConfig.takeTheMaximumNumberOfMenuItems()}`, () => {
        test('Особый случай: пустой массив образцов', () => {
            expect.soft(() => getSamplesOfTheIMenuItemsInTheNavBarInterface()[0].getItems()).toThrowError(new ErrorCreatingMenuItems('array is empty'));
        });

        test.each(getSamplesOfTheIMenuItemsInTheNavBarInterface().slice(1))('Обработка массива %s', (array: IMenuItemsInTheNavBar) => {
            expect.soft(array.getItems().length).toBeLessThanOrEqual(AppConfig.takeTheMinimumNumberOfMenuItems());
            expect.soft(array.getItems().length).toBeGreaterThanOrEqual(AppConfig.takeTheMaximumNumberOfMenuItems());
        });
    });

    describe('Пункты меню в нормальном виде', () => {
        test.each(getSamplesOfTheIMenuItemsInTheNavBarInterface().slice(1))('Обработка пункта "%s"', (array: IMenuItemsInTheNavBar) => {
            const pattern = /^\s+$/g;
            array.getItems().map((item: string) => {
                expect.soft(pattern.test(item)).toBeFalsy();
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheMenuItemString());
            });
        });
    })
});

// describe('Check wrapper data', () => {
//     const examplesOfBannerData: IBannerData[] = [
//         {
//             getTitle: () => 'Наименование баннера',
//             getDescription: () => 'случайный набор букв'
//         },
//         {
//             getTitle: () => 'Н',
//             getDescription: () => 'случайный набор букв'
//         },
//         {
//             getTitle: () => 'Наименование баннера',
//             getDescription: () => 'с'
//         },
//         {
//             getTitle: () => 'Наименование баннера  djgsksjdhgkjdfhgsdfkjgdfjklghvlgjhdkjsfhg',
//             getDescription: () => 'случайный набор букв'
//         },
//         {
//             getTitle: () => '',
//             getDescription: () => ''
//         },
//         {
//             getTitle: () => ' ',
//             getDescription: () => ' '
//         },
//     ];
//     test('Заголовок и описание баннера в порядке', () => {
//         const pattern = /^\s+$/g;
//         expect.soft(() => examplesOfBannerData[0].getTitle()).not.toThrowError();
//         expect.soft(() => examplesOfBannerData[0].getDescription()).not.toThrowError();
//         expect.soft(() => examplesOfBannerData[1].getTitle()).not.toThrowError();
//         expect.soft(() => examplesOfBannerData[1].getDescription()).not.toThrowError();
//         expect.soft(() => examplesOfBannerData[2].getTitle()).not.toThrowError();
//         expect.soft(() => examplesOfBannerData[2].getDescription()).not.toThrowError(new ErrorCreatingBanner(`minimum number of characters in the banner description - ${AppConfig.MIN_LENGTH_WRAPPER_DESCRIPTION}`));
//         expect.soft(() => examplesOfBannerData[3].getTitle()).toThrowError(new ErrorCreatingBanner(`maximum number of characters in the banner title - ${AppConfig.MAX_LENGTH_WRAPPER_TITLE}`));
//         expect.soft(() => pattern.test(examplesOfBannerData[4].getTitle())).toThrowError(new ErrorCreatingBanner('The banner title consists of space characters.'));
//         expect.soft(() => pattern.test(examplesOfBannerData[4].getDescription())).not.toThrowError(new ErrorCreatingBanner('The banner description consists of space characters.'));
//         expect.soft(() => pattern.test(examplesOfBannerData[5].getTitle())).toThrowError(new ErrorCreatingBanner('The banner title consists of space characters.'));
//         expect.soft(() => pattern.test(examplesOfBannerData[5].getDescription())).not.toThrowError(new ErrorCreatingBanner('The banner description consists of space characters.'));
//     });
// });