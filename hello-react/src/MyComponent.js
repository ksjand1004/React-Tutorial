import PropTypes from "prop-types";

const MyComponent = ({ name, favorteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다. <br />
      제가 좋아하는 숫자는 {favorteNumber}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favorteNumber: PropTypes.number.isRequired,
};

export default MyComponent; //모듈 내보내기(export)
