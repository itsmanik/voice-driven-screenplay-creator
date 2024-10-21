const ScreenPlay = (props) => {
  return (
    <div className="screenplay-page">
      {console.log(props.data)}
      <div
        id="screenplay-content"
        className="screenplay-container"
        dangerouslySetInnerHTML={{ __html: props.data }}
      />
      {/* <button className="download-button" onClick={handleDownloadPDF}>
        Download PDF
      </button> */}
    </div>
  );
};

export default ScreenPlay;
