const Contact = () => {
  return (
    <>
      <main className="main" id="contact">
        <h1 className="header">Contact</h1>
        <div className="flex-container">
          <h2>Marvin Sablattnig</h2>
          <table>
            <tr>
              <td className="content">Telefonnr.:</td>
              <td>+43 699 / 181 312 86</td>
            </tr>

            <tr>
              <td className="content">Email:</td>
              <td>marvin.sablattnig@gmail.com</td>
            </tr>

            <tr>
              <td className="content">Adresse:</td>
              <td>Podeblach 12, 9300 St. Veit an der Glan</td>
            </tr>
          </table>
        </div>
      </main>
    </>
  );
};

export default Contact;
