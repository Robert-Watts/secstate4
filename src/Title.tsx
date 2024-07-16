import classNames from "classnames";

const Title = ({ ...props }) => {
  return (
    <h1 className={classNames("my-3", props.className)} {...props}>
      Secretary of State for...
    </h1>
  );
};

export default Title;
