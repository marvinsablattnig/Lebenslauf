const Work = () => {
  return (
    <>
      <main className="main" id="work">
        <h1 className="header">Beruflicher Werdegang</h1>

        <div className="grid-container">
          <div className="year">November 2022 - laufend</div>
          <div className="col">
            Bürokraft und Zusteller bei{" "}
            <div className="primary-colored">Peter Riemer Handels GmbH</div>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">Februar 2022 - Mai 2022</div>
          <div className="col">
            Praktikum bei{" "}
            <div className="primary-colored">Company Lifting, Werbeagentur</div>
          </div>
          <div className="col">
            <ul>
              <li>Mitwirkung bei der Realisierung von Social Media Content</li>
              <li>Erstellung von Animationen</li>
              <li>Konzeption, Umsetzung und Nachbearbeitung von Videos</li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">August 2020 - Mai 2021</div>
          <div className="col">
            Lieferant bei <div className="primary-colored">Lieferando</div>
          </div>
          <div className="col">
            <ul>
              <li>Studentenjob</li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">Juni 2019 - August 2019</div>
          <div className="col">Hilfsarbeiter bei Bauern</div>
          <div className="col">
            <ul>
              <li>Ferialjob</li>
            </ul>
          </div>
        </div>
        <div className="grid-container">
          <div className="year">August 2018 - April 2019</div>
          <div className="col">
            Zivildienst bei <div className="primary-colored">Caritas</div> im
            Franziskusheim, Altenwohn- und Pflegeheim
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
