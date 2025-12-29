// import {describe, expect, test} from "vitest";
// import {AppConfig} from "../src/model/AppConfig";
// import {IBannerData} from "../src/model/IBannerData";
// import {ErrorCreatingBanner} from "../src/model/ErrorCreatingBanner";
// import {ExampleOfBannerData} from "../src/model/model-implementation-v1/ExampleOfBannerData";
//
// const getSamplesOfBannerData = (): IBannerData[] => {
//     return [
//         new ExampleOfBannerData('ds', 'ds'),
//         new ExampleOfBannerData('dsFDSFSDFSF', 'dsFSDFDSFSDFSFSDFSFS'),
//         new ExampleOfBannerData('dsFDSFSFSDFSDFSFSDFSF', 'dsFSDFDSFSDFFSDFDSFSDFDSFSDSFSDFSFS'),
//     ];
// }
// describe('Проверка баннера', () => {
//     test('Особый случай: длина строки заголовка', () => {
//         expect.soft(() => getSamplesOfBannerData()[0].getTitle()).toThrowError(new ErrorCreatingBanner(`minimum length of the header string - ${AppConfig.getTheMinimumLengthOfTheBannerHeaderString()}`));
//     })
//
//     describe('Заголовок в нормальном виде', () => {
//         const pattern = /^\s+$/g;
//         test.each(getSamplesOfBannerData().slice(1))('Обработка данных "%s"', (wrapperData: IBannerData) => {
//             expect.soft(wrapperData.getTitle().length).toBeGreaterThanOrEqual(AppConfig.getTheMinimumLengthOfTheBannerHeaderString());
//             expect.soft(pattern.test(wrapperData.getTitle())).toBeFalsy();
//         });
//     });
//
//     test('Особый случай: длина строки описания', () => {
//         expect.soft(() => getSamplesOfBannerData()[0].getDescription()).toThrowError(new ErrorCreatingBanner(`minimum length of the description string - ${AppConfig.getTheMinimumLengthOfTheBannerDescriptionString()}`));
//     })
//
//     describe('Описание в нормальном виде', () => {
//         const pattern = /^\s+$/g;
//         test.each(getSamplesOfBannerData().slice(1))('Обработка данных "%s"', (wrapperData: IBannerData) => {
//             expect.soft(wrapperData.getDescription().length).toBeGreaterThanOrEqual(AppConfig.getTheMinimumLengthOfTheBannerDescriptionString());
//             expect.soft(pattern.test(wrapperData.getTitle())).toBeFalsy();
//         });
//     });
// });