// eslint-disable-next-line react/prop-types
const Input = ({ py="12px", ...otherProps }) => {
  return (
    <input
      style={{ paddingTop: py, paddingBottom: py }}
      className={`bg-[#f2f2f2] outline-none placeholder:text-[#2d2d2d]/50 px-6 text-sm font-medium w-full`}
      {...otherProps}
    />
  );
};
export default Input;
