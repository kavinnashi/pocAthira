import { PeriodicElement } from "./periodicElementInterface";
import { SortInterface } from "./sortInterface";

export interface TableInterface {
    table:any[],
    sorting:SortInterface[]|null|undefined
}