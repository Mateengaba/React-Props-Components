function Button({ label, borderColor, bgColor , txtColor,hover }) {
    return (
      <button
        className={`hover:text-orange-700 border  ${borderColor ? borderColor : "border-blue-400"} ${
          bgColor ? bgColor : "bg-white"
        }  ${txtColor ? txtColor : "text-black"}   rounded-md p-2 px-4 m-4`}
      >
        {label}
      </button>
    );
  }
  
  export default Button;