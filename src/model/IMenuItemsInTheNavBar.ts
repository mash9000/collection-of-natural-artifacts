export interface IMenuItemsInTheNavBar {
    getItems(): { title: string, link: URL }[];
}