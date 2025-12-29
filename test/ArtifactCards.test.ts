import {describe, expect, test} from "vitest";
import {AppConfig} from "../src/model/AppConfig";
import {
    ErrorCreatingArtifactCard
} from "../src/model/errors/ErrorCreatingArtifactCard";
import {
    ExampleOfArtifactCard
} from "../src/model/model-implementation-v1/classes/ExampleOfArtifactCard";

describe('Карточки артефактов', () => {
    describe('Проверка заголовка', () => {
        const testNormalHeading1: string = 'd';
        const testNormalHeading2: string = 'dddsdsdsdf';
        const standardDescription: string = 'Какое-то описание';
        const standardUrl: URL = new URL("http://localhost:8080/");
        const standardRate: number = 3;
        test('При попытке создания заголовка длиной до указанного требования не выбрасывает исключения', () => {
            expect.soft(new ExampleOfArtifactCard(testNormalHeading1, standardDescription, standardUrl, standardRate).getHeading().length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
            expect.soft(() => new ExampleOfArtifactCard(testNormalHeading1, standardDescription, standardUrl, standardRate)).not.toThrowError();
            expect.soft(new ExampleOfArtifactCard(testNormalHeading2, standardDescription, standardUrl, standardRate).getHeading().length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
            expect.soft(() => new ExampleOfArtifactCard(testNormalHeading2, standardDescription, standardUrl, standardRate)).not.toThrowError();
        });

        const testNotNormalHeading1: string = '';
        test('При попытке создания пустого заголовка - выбрасывается исключение', () => {
            expect.soft(() => new ExampleOfArtifactCard(testNotNormalHeading1, standardDescription, standardUrl, standardRate)).toThrowError(new ErrorCreatingArtifactCard('заголовок не должен быть пустым'));
        });
        const testNotNormalHeading2: string = '     ';
        test('При попытке создания заголовка, состоящего из пробелов - выбрасывается исключение', () => {
            expect.soft(() => new ExampleOfArtifactCard(testNotNormalHeading2, standardDescription, standardUrl, standardRate)).toThrowError(new ErrorCreatingArtifactCard('заголовок не должен состоять из пробелов'));
        })
    });

    describe('Проверка рейтинга', () => {
        const normalTitle: string = 'Заголовок';
        const normalDescription: string = 'Вот стандартное описание';
        const normalUrl: URL = new URL("http://localhost:8080/");
        const normalRate: number = 2.0;
        test('При попытке создания карточки артефакта с нормальным рейтингом ошибка не выбрасывается', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, normalRate)).not.toThrowError();
            const exampleOfArtifactCard: ExampleOfArtifactCard = new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, normalRate);
            const ratePattern: RegExp = /^\d.\d$/g;
            expect.soft(String(exampleOfArtifactCard.getRate())).match(ratePattern);
        });

        test('При попытке создания карточки артефакта с нормальным рейтингом онный в необходимом диапазоне', () => {
            const exampleOfArtifactCard: ExampleOfArtifactCard = new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, normalRate);
            expect.soft(Number(exampleOfArtifactCard.getRate())).toBeGreaterThanOrEqual(AppConfig.getTheMinimumRate());
            expect.soft(Number(exampleOfArtifactCard.getRate())).toBeLessThanOrEqual(AppConfig.getTheMaximumRate());
        });

        const notNormalRate1: number = -32.3;
        test('При попытке создания карточки артефакта с отрицательным рейтингом  - выбрасывается исключение', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, notNormalRate1)).toThrowError(new ErrorCreatingArtifactCard(`рейтинг должен быть равным или больше ${AppConfig.getTheMinimumRate()}`));
        });

        const notNormalRate2: number = 32.3;
        test('При попытке создания карточки артефакта с превышающим рейтингом  - выбрасывается исключение', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, notNormalRate2)).toThrowError(new ErrorCreatingArtifactCard(`рейтинг должен быть равным или меньше ${AppConfig.getTheMaximumRate()}`));
        });
    });

    describe('Проверка описания', () => {
        const normalTitle: string = 'Заголовок';
        const normalRate: number = 2.0;
        const normalDescription: string = 'Вот стандартное описание';
        const normalUrl: URL = new URL("http://localhost:8080/");
        test('При попытке создать карточку артефакта с нормальным описанием исключение не выбрасывается', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, normalRate)).not.toThrowError();
        });

        test('При попытке создать карточку артефакта с нормальным описанием длина онного соответствует требованиям', () => {
            const exampleOfArtifactCard: ExampleOfArtifactCard = new ExampleOfArtifactCard(normalTitle, normalDescription, normalUrl, normalRate);
            expect.soft(exampleOfArtifactCard.getDescription().length).toBeGreaterThanOrEqual(AppConfig.getTheMinimumLengthOfDescriptionString());
        });

        const notNormalDescription1: string = 'd';
        test('При попытке создать карточку артефакта с коротким описанием длина онного не соответствует требованиям', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, notNormalDescription1, normalUrl, normalRate)).toThrowError(new ErrorCreatingArtifactCard(`длина описания должна быть не менее ${AppConfig.getTheMinimumLengthOfDescriptionString()}`));
        });

        const notNormalDescription2: string = '';
        test('При попытке создать карточку артефакта с пустым описанием длина онного не соответствует требованиям', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, notNormalDescription2, normalUrl, normalRate)).toThrowError(new ErrorCreatingArtifactCard('описание не должно быть пустым'));
        });

        const notNormalDescription3: string = '    ';
        // описание не должно состоять из пробелов
        test('При попытке создать карточку артефакта с описанием, состоящим из пробелов, не соответствует требованиям', () => {
            expect.soft(() => new ExampleOfArtifactCard(normalTitle, notNormalDescription3, normalUrl, normalRate)).toThrowError(new ErrorCreatingArtifactCard('описание не должно состоять из пробелов'));
        });
    })
});