/* eslint-disable import/prefer-default-export */
export const convertTime = (_seconds) => {
  const minutes = Math.floor(_seconds / 60);

  const seconds = _seconds - minutes * 60;
  if (seconds > 9) return `${minutes}: ${seconds}`;
  return `${minutes}: 0${seconds}`;
};

export const generateID = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 28; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

// const [timer, setTimer] = useState(12);
// useEffect(() => {
//   const interval = setInterval(() => {
//     if (timer > 0) setTimer((timer) => timer - 1);
//     else clearInterval(interval);
//   }, 1000);

//   return () => clearInterval(interval);
// }, [timer]);
