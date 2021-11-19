export const CHANGE_DEFAULT = 'CHANGE_DEFAULT';

export function changeDefault( newText ) {
  return {
    type: CHANGE_DEFAULT,
    payload: {
      newText,
    }
  }
}