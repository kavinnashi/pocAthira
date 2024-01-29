import { createFeature, createReducer, on} from "@ngrx/store"
import { fileActions } from "./actions";
import { TabStateInterface } from "../types/tabstateInterface";
const initialTabState:TabStateInterface={
   tabs:[],
   index:0
    
}

const fileFeature = createFeature({
    name :"file",
    reducer: createReducer(
        initialTabState,
        on(fileActions.selectFile,(state,action)=>({...state, 
           tabs:[...state.tabs,...[action.tabs]]
        })),
        on(fileActions.updateFileSort, (state, { index, tabs }) => {
            const items = [...state.tabs]; // Create a copy of the array
            items[index] = tabs; // Update the value at the specified index
            return { ...state, items }; // Return the updated state
          }),
          on(fileActions.selectTab, (state, { index }) => {
           
            return { ...state, index }; // Return the updated state
          })

    )

});

export const {name:fileFeatureKey,reducer:fileFeatureReducer,selectTabs,selectIndex}=fileFeature;