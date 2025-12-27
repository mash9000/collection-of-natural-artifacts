import {describe, expect, test} from "vitest";

describe('Check nav bar menu items', () => {
    const setOfMenuItemsInTheNavbar: IMenuItemsInTheNavBar[] = [
        {getItems: () => []},
        {getItems: () => ['Лаборатория']},
        {getItems: () => ['Лаборатория', 'Новые артефакты']},
        {getItems: () => ['Лаборатория', 'Новые артефакты', 'Контакты']},
        {getItems: () => ['Лаборатория', 'Новые артефакты', 'Контакты', 'О нас']},
        {getItems: () => ['Лаборатория', 'Новые артефакты', 'Контакты', 'О нас', 'Бред сивой кобылы']}
    ];

    test('Количество пунктов в navbar не более 4-х', () => {
        expect.soft(() => setOfMenuItemsInTheNavbar[0].getItems()).toThrowError(new ErrorCreatingMenuItems('empty list'));
        expect.soft(() => setOfMenuItemsInTheNavbar[1].getItems()).not.toThrowError();
        expect.soft(() => setOfMenuItemsInTheNavbar[2].getItems()).not.toThrowError();
        expect.soft(() => setOfMenuItemsInTheNavbar[3].getItems()).not.toThrowError();
        expect.soft(() => setOfMenuItemsInTheNavbar[4].getItems()).not.toThrowError();
        expect.soft(() => setOfMenuItemsInTheNavbar[5].getItems()).toThrowError(new ErrorCreatingMenuItems('too many menu items (there should be no more than four)'));
    });

    test('Тексты пунктов navbar в порядке', () => {
        test(`Количество символов не превышает норму в ${AppConfig.MAX_NAVBAR_ITEMS_LENGTH}`, () => {
            test.each(setOfMenuItemsInTheNavbar[1].getItems())('', item => {
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
            });
            test.each(setOfMenuItemsInTheNavbar[2].getItems())('', item => {
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
            });
            test.each(setOfMenuItemsInTheNavbar[3].getItems())('', item => {
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
            });
            test.each(setOfMenuItemsInTheNavbar[4].getItems())('', item => {
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
            });
            test.each(setOfMenuItemsInTheNavbar[5].getItems())('', item => {
                expect.soft(item.length).toBeLessThanOrEqual(AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
            });
        });

        const menuItemsThatDoNotPassRegularExpressions: IMenuItemsInTheNavBar[] = [
            {getItems: () => ['']},
            {getItems: () => ['', ' ', '   ']}
        ];
        describe('Каждый пункт не состоит из пробелов', () => {
            const pattern = /^\s+$/g;
            setOfMenuItemsInTheNavbar.map((item: IMenuItemsInTheNavBar) => {
                test.each(item.getItems())('', (itemStr: string) => {
                    expect.soft(itemStr).not.toStrictEqual('');
                    expect.soft(pattern.test(itemStr)).toBeFalsy();
                });
            })
        });
        test.each(menuItemsThatDoNotPassRegularExpressions)('', (item) => {
           expect.soft(() => item.getItems()).toThrowError(new ErrorCreatingMenuItems('the menu item consists of space characters'));
        });
    });
});

describe('Check wrapper data', () => {
    const examplesOfBannerData: IBannerData[] = [
        {
            title: 'Наименование баннера',
            preamble: 'случайный набор букв'
        },
        {
            title: 'Н',
            preamble: 'случайный набор букв'
        },
        {
            title: 'Наименование баннера',
            preamble: 'с'
        },
        {
            title: 'Наименование баннера  djgsksjdhgkjdfhgsdfkjgdfjklghvlgjhdkjsfhg',
            preamble: 'случайный набор букв'
        },
        {
            title: '',
            preamble: ''
        },
        {
            title: ' ',
            preamble: ' '
        },
    ];
    test('Заголовок и описание баннера в порядке', () => {
        const pattern = /^\s+$/g;
        expect.soft(() => examplesOfBannerData[0].getTitle()).not.toThrowError();
        expect.soft(() => examplesOfBannerData[0].getDescription()).not.toThrowError();
        expect.soft(() => examplesOfBannerData[1].getTitle()).not.toThrowError();
        expect.soft(() => examplesOfBannerData[1].getDescription()).not.toThrowError();
        expect.soft(() => examplesOfBannerData[2].getTitle()).not.toThrowError();
        expect.soft(() => examplesOfBannerData[2].getDescription()).not.toThrowError(new ErrorCreatingBanner(`minimum number of characters in the banner description - ${AppConfig.MIN_LENGTH_WRAPPER_DESCRIPTION}`));
        expect.soft(() => examplesOfBannerData[3].getTitle()).toThrowError(new ErrorCreatingBanner(`maximum number of characters in the banner title - ${AppConfig.MAX_LENGTH_WRAPPER_TITLE}`));
        expect.soft(() => pattern.test(examplesOfBannerData[4].getTitle())).toThrowError(new ErrorCreatingBanner('The banner title consists of space characters.'));
        expect.soft(() => pattern.test(examplesOfBannerData[4].getDescription())).not.toThrowError(new ErrorCreatingBanner('The banner description consists of space characters.'));
        expect.soft(() => pattern.test(examplesOfBannerData[5].getTitle())).toThrowError(new ErrorCreatingBanner('The banner title consists of space characters.'));
        expect.soft(() => pattern.test(examplesOfBannerData[5].getDescription())).not.toThrowError(new ErrorCreatingBanner('The banner description consists of space characters.'));
    });
});