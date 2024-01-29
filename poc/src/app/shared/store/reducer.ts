import { createFeature, createReducer, on} from "@ngrx/store"
import { fileActions } from "./actions";
import { TabStateInterface } from "../types/tabstateInterface";
const initialTabState:TabStateInterface={
   tabs:[]
    
}

const fileFeature = createFeature({
    name :"file",
    reducer: createReducer(
        initialTabState,
        on(fileActions.selectFile,(state,action)=>({...state, 
           tabs:[action.tabs]
        }))

    )

});

export const {name:fileFeatureKey,reducer:fileFeatureReducer,selectTabs}=fileFeature;