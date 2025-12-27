import type {IMenuItemsInTheNavBar} from "../model/IMenuItemsInTheNavBar.ts";
import {ErrorCreatingMenuItems} from "../model/ErrorCreatingMenuItems.ts";
import {AppConfig} from "../model/AppConfig.ts";

export class ExampleOfMenuItems implements IMenuItemsInTheNavBar {
    constructor(private readonly menuItems: string[]) {
    }

    getItems(): string[] {
        this.checkTheArray();

        this.trimExcessCharactersFromMenuItems();

        return this.menuItems.slice(0, AppConfig.getTheMaximumNumberOfMenuItems());
    }

    private checkTheArray() {
        if (this.menuItems.length == 0)
            throw new ErrorCreatingMenuItems('array is empty');

        if (this.menuItems.length < AppConfig.getTheMinimumNumberOfMenuItems())
            throw new ErrorCreatingMenuItems(`minimum number of menu items - ${AppConfig.getTheMinimumNumberOfMenuItems()}`);
    }

    private trimExcessCharactersFromMenuItems(): void {
        this.menuItems.forEach((menuItem: string): string => menuItem.substring(0, AppConfig.getTheMaximumLengthOfTheMenuItemString()));
    }
}