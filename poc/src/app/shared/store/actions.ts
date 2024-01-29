import { createActionGroup, props} from "@ngrx/store"
import { TabsInterface } from "../types/tabsInterface";
import { TableInterface } from "../types/tableInterface";
import { PeriodicElement } from "../types/periodicElementInterface";
export const fileActions= createActionGroup({
    source: "file",
    events: {
        "select file":props<{tabs:TabsInterface}>()
    }
})