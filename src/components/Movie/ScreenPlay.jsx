const ScreenPlay = (props) => {
  return (
    <div className="screenplay-page bg-black">
      {console.log(props.data)}
      <div
        id="screenplay-content"
        className="screenplay-container"
        dangerouslySetInnerHTML={{ __html: props.data }}
      />
      <button className="download-button relative px-8 py-2 ml-4 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple">
        Download PDF
      </button>
    </div>
  );
};

export default ScreenPlay;
