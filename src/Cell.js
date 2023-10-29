const Cell = ({ index, filled, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick(index)}
      disabled={filled || disabled ? true : false}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
};

export default Cell;
