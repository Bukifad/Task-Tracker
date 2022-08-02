import Button from "./Button";
const Header = ({ Title, onAdd }) => {
  return (
    <header className="header">
      <h1>{Title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  Title: "Task Tracker",
};
export default Header;
