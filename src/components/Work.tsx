const Work = () => {
  return (
    <>
      <div id="worknav" className="navanchor"></div>
      <main className="main d dark" id="work">
        <h1 className="header">
          <div className="german invisible">Beruflicher Werdegang</div>
          <div className="english">Employment History</div>
        </h1>

        <div className="grid-container">
          <div className="year">
            <div className="german invisible">November 2022 - laufend</div>
            <div className="english">November 2022 - Now</div>
          </div>
          <div className="col">
            <div className="german invisible">Bürokraft und Zusteller bei </div>
            <div className="english">Office Worker and Delivery Driver</div>
            <div>
              <em>Peter Riemer Handels GmbH</em>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">Februar 2022 - Mai 2022</div>
            <div className="english">February 2022 - May 2022</div>
          </div>
          <div className="col">
            <div className="german invisible">
              <em>Praktikum bei Company Lifting, Werbeagentur</em>
            </div>
            <div className="english">
              <em>Internship at Company Lifting, Advertising Agency</em>
            </div>
          </div>
          <div className="col">
            <div className="german invisible">
              <ul>
                <li>
                  Mitwirkung bei der Realisierung von Social Media Content
                </li>
                <li>Erstellung von Animationen</li>
                <li>Konzeption, Umsetzung und Nachbearbeitung von Videos</li>
              </ul>
            </div>
            <div className="english">
              <ul>
                <li>Creating Social Media Content</li>
                <li>Animations</li>
                <li>Video Production</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">August 2020 - Mai 2021</div>
            <div className="english">August 2020 - May 2021</div>
          </div>

          <div className="col">
            <div className="german invisible">
              Lieferant bei
              <div>
                {" "}
                <em>Lieferando</em>
              </div>
            </div>
            <div className="english">
              Delivery Driver at
              <div>
                {" "}
                <em>Lieferando</em>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="german invisible">
              <ul>
                <li>Studentenjob</li>
              </ul>
            </div>
            <div className="english">
              <ul>
                <li>Studentjob</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">Juni 2019 - August 2019</div>
            <div className="english">June 2019 - August 2019</div>
          </div>
          <div className="col">
            <div className="german invisible">Hilfsarbeiter bei Bauern</div>
            <div className="english">Helping Worker at a Farm</div>
          </div>
          <div className="col">
            <div className="german invisible">
              <ul>
                <li>Ferialjob</li>
              </ul>
            </div>
            <div className="english">
              <ul>
                <li>Summer Job</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">
            <div className="german invisible">August 2018 - April 2019</div>
            <div className="english">August 2018 - April 2019</div>
          </div>
          <div className="col">
            <div className="german invisible">
              Zivildienst bei{" "}
              <div>
                <em>Caritas</em>
              </div>{" "}
              im Franziskusheim, Altenwohn- und Pflegeheim
            </div>
            <div className="english">
              Community Service at{" "}
              <div>
                <em>Caritas</em>
              </div>{" "}
              at the Franziskusheim, Retirement Home
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
