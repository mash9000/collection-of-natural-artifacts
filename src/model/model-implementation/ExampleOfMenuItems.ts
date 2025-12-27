import type {IMenuItemsInTheNavBar} from "../IMenuItemsInTheNavBar.ts";
import {ErrorCreatingMenuItems} from "../ErrorCreatingMenuItems.ts";
import {AppConfig} from "../AppConfig.ts";

export class ExampleOfMenuItems implements IMenuItemsInTheNavBar {
    constructor(private readonly menuItems: { title: string, link: URL }[]) {
    }

    getItems(): { title: string, link: URL }[] {
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
        this.menuItems.forEach((menuItem: { title: string, link: URL }): string => menuItem.title.substring(0, AppConfig.getTheMaximumLengthOfTheMenuItemString()));
    }
}