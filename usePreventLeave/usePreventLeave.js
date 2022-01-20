export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    //chrome에서 필수
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
