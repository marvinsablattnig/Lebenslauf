const School = () => {
  return (
    <>
      <main className="main" id="school">
        <h1 className="header">Schulischer Werdegang</h1>
        <div className="grid-container">
          <div className="year">Oktober 2019 - Juli 2022</div>
          <div className="col">
            Bachelorstudium{" "}
            <div className="primary-colored">Mulitmediatechnik</div> an der{" "}
            <div className="primary-colored">Fachhochschule Kärnten</div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">September 2014 - August 2018</div>
          <div className="col">BORG Auer von Welsbach in Treibach/Althofen</div>
        </div>
        <div className="grid-container">
          <div className="year">September 2013 - Juli 2014</div>
          <div className="col">HTL Villach - Informationstechnologie</div>
        </div>
      </main>
    </>
  );
};

export default School;
