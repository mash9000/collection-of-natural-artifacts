import type {IMenuItemsInTheNavBar} from "../model/IMenuItemsInTheNavBar.ts";
import {AppConfig} from "../model/AppConfig.ts";
import {ErrorCreatingMenuItems} from "../model/ErrorCreatingMenuItems.ts";

export class ExampleOfMenuItems implements IMenuItemsInTheNavBar {
    constructor(private readonly menuItems: string[]) {
    }

    getItems(): string[] {
        if (this.menuItems.length == 0)
            throw new ErrorCreatingMenuItems('empty list');

        this.trimExcessCharactersFromMenuItems();

        return this.menuItems.slice(0, AppConfig.MAX_NAVBAR_ITEMS_LENGTH);
    }

    private trimExcessCharactersFromMenuItems(): void {
        this.menuItems.forEach((menuItem: string): string => menuItem.substring(0, AppConfig.MAX_NAVBAR_ITEM_TITLE_LENGTH));
    }
}