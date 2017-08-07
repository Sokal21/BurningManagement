export function addNewNpc(npc) {
  return {type: 'ADD_NEW_NPC',
          npc: npc};
};

export function deleteNpc(index) {
  return {type: 'DELETE_NPC',
          index: index};
};

export function changeComp(comp) {
  return {type: 'CHANGE_COMP',
          comp: comp};
};

export function copyNpc(index) {
  return {type: 'COPY_NPC',
          index: index};
};

export function changeNpc(index) {
  return {type: 'CHANGE_NPC',
          index: index};
};
