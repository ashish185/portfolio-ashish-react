import "./toggleButton.scss";

export const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      className={`toggle-button ${open ? "open" : "closed"}`}
      onClick={() => setOpen((prev) => !prev)}
      aria-label="toggle button"
    >
      <span className="bar bar-top" />
      <span className="bar bar-middle" />
      <span className="bar bar-bottom" />
    </button>
  );
};
