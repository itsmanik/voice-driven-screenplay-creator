import Button from "../UI/Button";

const NewMovieForm = (props) => {
  const submitNewMovieHandler = () => {
    alert("Submitted");
  };
  return (
    <>
      <div
        onClick={props.onCancel}
        className="something backdrop-blur bg-[#00000085] fixed z-40 mt-2 h-screen w-screen flex justify-center items-center"
      ></div>
      <div className="bg-black rounded overflow-hidden absolute z-50 top-1/2 shadow-lg shadow-[#272727] left-1/2 border border-[#353535] -translate-x-1/2 -translate-y-1/2 text-lightWhite drop-shadow-2xl p-7">
        <form onSubmit={submitNewMovieHandler}>
          <header className="pb-7 text-2 text-purple text-3xl text-center">
            Create a new Movie
          </header>
          <div className="flex flex-col mb-4">
            <label className="pb-2">Movie Name</label>
            <input
              type="text"
              className="bg-gray-300 rounded text-black outline-none p-2"
              required
            />
          </div>
          <div className="">
            <label className="">Provide an description</label>
            <textarea
              type="text"
              className="bg-gray-300 rounded text-black flex flex-col mt-2 outline-none p-2"
              required
              cols={50}
              rows={6}
            />
          </div>
            <Button type={"submit"} text="Create" />
        </form>
      </div>
    </>
  );
};

export default NewMovieForm;
