/* eslint-disable react/prop-types */

const TextInput = ({ label, id, value, onChange, name }) => {
  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-1 shadow-inner shadow-secondary py-4 px-6 rounded hover:scale-105 transition ease-in-out duration-300"
    >
      <span className="text-primary font-medium">{label}</span>
      <input
        type="text"
        className="rounded p-1 shadow shadow-secondary hover:shadow-primary focus:ring focus:ring-primary transition ease-in-out duration-300 text-background "
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export default TextInput;
