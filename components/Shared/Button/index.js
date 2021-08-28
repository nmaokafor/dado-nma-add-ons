/**
 *
 * @param {handleClick, children, id, type} props
 * @handleClick returns button event
 * @children: button text default undefined
 * @loading: boolean default undefined
 * id: id for the button
 */

export const Button = ({ id, type, handleClick, children }) => {
  return (
    <button
      className="button"
      id={id}
      type={type ? type : "button"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
