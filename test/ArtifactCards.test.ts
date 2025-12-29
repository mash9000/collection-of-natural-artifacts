import {describe, expect, test} from "vitest";
import {AppConfig} from "../src/model/AppConfig";
import {
    ErrorCreatingArtifactCard
} from "../src/model/errors/ErrorCreatingArtifactCard";
import {
    ExampleOfArtifactCard
} from "../src/model/model-implementation-v1/classes/ExampleOfArtifactCard";

describe('Карточки артефактов', () => {
    const testNormalTitle1: string = 'd';
    const testNormalTitle2: string = 'dddsdsdsdf';
    const standardDescription: string = 'Какое-то описание';
    const standardUrl: URL = new URL("http://localhost:8080/");
    test('При попытке создания заголовка длиной до указанного требования не выбрасывает исключения', () => {
        expect.soft(new ExampleOfArtifactCard(testNormalTitle1, standardDescription, standardUrl).getHeading().length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
        expect.soft(() => new ExampleOfArtifactCard(testNormalTitle1, standardDescription, standardUrl)).not.toThrowError();
        expect.soft(new ExampleOfArtifactCard(testNormalTitle2, standardDescription, standardUrl).getHeading().length).toBeLessThanOrEqual(AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
        expect.soft(() => new ExampleOfArtifactCard(testNormalTitle2, standardDescription, standardUrl)).not.toThrowError();
    });

    const testNotNormalTitle1: string = '';
    test('При попытке создания пустого заголовка - выбрасывается исключение', () => {
       expect.soft(() => new ExampleOfArtifactCard(testNotNormalTitle1, standardDescription, standardUrl)).toThrowError(new ErrorCreatingArtifactCard('заголовок не должен быть пустым'));
    });
    const testNotNormalTitle2: string = '     ';
    test('При попытке создания заголовка, состоящего из пробелов - выбрасывается исключение', () => {
        expect.soft(() => new ExampleOfArtifactCard(testNotNormalTitle2, standardDescription, standardUrl)).toThrowError(new ErrorCreatingArtifactCard('заголовок не должен состоять из пробелов'));
    })
});