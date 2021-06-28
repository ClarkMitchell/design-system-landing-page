import PropTypes from "prop-types";

export default function Button({
  primary = false,
  backgroundColor = "green",
  size = "medium",
  label,
  ...props
}) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button type="button" className="test-button" {...props}>
      {label}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
