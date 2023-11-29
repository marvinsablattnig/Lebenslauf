const School = () => {
  return (
    <>
      <div id="schoolnav" className="navanchor"></div>
      <main className="main c light" id="school">
        <h1 className="header">
          <div className="german invisible">Schulischer Werdegang</div>
          <div className="english">Education</div>
        </h1>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">Oktober 2019 - Juli 2022</div>
            <div className="english">October 2019 - July 2022</div>
          </div>
          <div className="col">
            <div className="german invisible">Bachelorstudium - </div>
            <div className="english">Bachelor Degree - </div>
            <div>
              <em>
                <div className="german invisible">
                  Multimediatechnik an der{" "}
                </div>
                <div className="english">Multimedia Technology at the</div>
              </em>
            </div>
            <div>
              <em>
                <div className="german invisible">Fachhochschule Kärnten</div>
                <div className="english">University of Applied Science</div>
              </em>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">September 2014 - August 2018</div>
            <div className="english">September 2014 - August 2018</div>
          </div>
          <div className="col">BORG Auer von Welsbach in Treibach/Althofen</div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">September 2013 - Juli 2014</div>
            <div className="english">September 2013 - July 2014</div>
          </div>
          <div className="col">
            <div className="german invisible">
              HTL Villach - Informationstechnologie
            </div>
            <div className="english">HTL Villach - Information Technology</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default School;
