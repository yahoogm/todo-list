type propsTypes = {
  text: string;
  btnColor: string;
};

const Button = ({ text, btnColor }: propsTypes) => {
  return (
    <button className={`btn w-full text-white ${btnColor}`}>{text}</button>
  );
};

export default Button;
