export default function userInfo(state = [], action) {
  switch (action.type) {
    case 'cos tam':
      return { ...state };
    default:
      return state;
  }
}
