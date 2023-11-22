type propsTypes = {
  placeholder: string;
  type: 'password' | 'text' | 'email';
};

const Input = ({ placeholder, type }: propsTypes) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-96 bg-white text-black"
    />
  );
};

export default Input;
