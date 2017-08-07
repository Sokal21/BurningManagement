import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  npcs: [],
  currentComp: 'createNPC',
  currentNPCindex: undefined,
};

export default function reducer(state = initialState,action) {
  switch (action.type) {
    case 'ADD_NEW_NPC':
      return Object.assign({},state,{npcs: [...state.npcs, action.npc]});
    case 'DELETE_NPC':
      let index = action.index;
      return Object.assign({},state,{npcs: [...state.npcs.slice(0,index),
                                                     ...state.npcs.slice(index+1)]});
    case 'CHANGE_COMP':
      return Object.assign({},state,{currentComp: action.comp});
    case 'COPY_NPC':
      let copy_npc = state.npcs[action.index];
      return Object.assign({},state,{npcs: [...state.npcs, copy_npc]});
    case 'CHANGE_NPC':
      return Object.assign({},state,{currentNPCindex: action.index});
    case REHYDRATE:
      if (action.payload.npcs) {
        return Object.assign({},state,{npcs: action.payload.npcs});
      } else {
        return state;
      }
    default:
      return state;
  }
}
