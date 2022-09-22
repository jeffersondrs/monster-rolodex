const SeachBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl justify-center text-center w-96">
      <input
        className={`seach-box w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 ${className}`}
        type="search"
        placeholder={`${placeHolder}`}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SeachBox;
