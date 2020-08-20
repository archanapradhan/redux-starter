import * as actions from "./actionsTypes";

// function bugAdded(description) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: { description: "Bug1" },
//   };
// }

// export const bugAdded = (bugDescription) => ({
//   type: actions.BUG_REMOVED,
//   payload: { description: bugDescription },
// });

// export const bugAdded = (bugDescription) => {
//   setTimeout(() => {
//     return {
//       type: actions.BUG_REMOVED,
//       payload: { description: bugDescription },
//     };
//   }, 2000);
// };

export const bugAdded = (bugDescription) => {
  return (dispatch, store) => {
    setTimeout(() => {
      return dispatch({
        type: actions.BUG_REMOVED,
        payload: { description: bugDescription },
      });
    }, 2000);
  };
};

export const bugRemoved = (bugId) => ({
  type: actions.BUG_REMOVED,
  payload: { id: bugId },
});

export const bugResolved = (bugId) => ({
  type: actions.BUG_RESOLVED,
  payload: { id: bugId },
});
