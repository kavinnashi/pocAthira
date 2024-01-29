import { PeriodicElement } from "./periodicElementInterface";
import { SortInterface } from "./sortInterface";

export interface TableInterface {
    table:PeriodicElement[],
    sorting:SortInterface[]|null|undefined
}