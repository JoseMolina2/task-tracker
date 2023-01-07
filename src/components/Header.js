import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, show }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={show ? "red" : "green"}
        text={show ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.protoTypes = {
  title: PropTypes.string,
};

export default Header;
