import { useHistory } from "react-router";

function Back() {
  const back = useHistory();

  // Go back button using useHistory Hook
  return (
    <div style={{ alignItems: "center" }}>
      <button className="back-btn" onClick={() => back.goBack()}>
        GO BACK
      </button>
    </div>
  );
}

export { Back };
