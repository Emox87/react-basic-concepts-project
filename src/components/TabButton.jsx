const TabButton = ({ children, isSelected, ...props }) => {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
