import { inject } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { fileActions } from "./actions";
import {  tap } from "rxjs";
import {TabDataService} from "../../services/data-service.service"
export const fileEffect= createEffect((action$=inject(Actions),tabData$=inject(TabDataService))=>{
    return action$.pipe(
        ofType(fileActions.selectFile),
        tap(({tabs})=>{
            tabData$.updateTabData(tabs);
        })
    )
},{functional:true, dispatch:false});





