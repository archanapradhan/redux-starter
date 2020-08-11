import * as actions from "./actionsTypes";

// function bugAdded(description) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: { description: "Bug1" },
//   };
// }

export const bugAdded = (bugDescription) => ({
  type: actions.BUG_REMOVED,
  payload: { description: bugDescription },
});

export const bugRemoved = (bugId) => ({
  type: actions.BUG_REMOVED,
  payload: { id: bugId },
});

export const bugResolved = (bugId) => ({
  type: actions.BUG_RESOLVED,
  payload: { id: bugId },
});
