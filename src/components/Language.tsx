function Language() {
  const english = document.querySelectorAll(".english");
  const german = document.querySelectorAll(".german");
  console.log(english, german);
  const changeToGerman = () => {
    german[0]?.classList.add("invisible");
    english[0]?.classList.remove("invisible");
  };
  const changeToEnglish = () => {
    english[0]?.classList.add("invisible");
    german[0]?.classList.remove("invisible");
  };
  return (
    <>
      <div className="language">
        <button
          className="en"
          onClick={() => {
            changeToEnglish();
          }}
        >
          EN
        </button>
        <button
          className="de"
          onClick={() => {
            changeToGerman();
          }}
        >
          DE
        </button>
      </div>
    </>
  );
}

export default Language;
