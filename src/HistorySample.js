import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };
  const replaceToHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("Leave this page?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}> GoBack </button>
      <button onClick={goHome}> GoHome </button>
      <button onClick={replaceToHome}> GoHome(Replace) </button>
    </div>
  );
}
export default HistorySample;
