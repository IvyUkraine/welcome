import React from "react";

const About = () => {
  return (
    <div className={"About"}>
      <h2>Kim jesteśmy?</h2>
      <div className={"aboutText"}>
        <p>
          Klinika Matmy to ogólnopolska inicjatywa wspierająca edukacyjnie
          dzieci pracowników opieki zdrowotnej. Powstała marcu 2020 r. w
          odpowiedzi na problemy dzieci i młodzieży w nauce, spowodowane
          pandemią Covid-19 i nauczaniem zdalnym.
        </p>

        <p>
          Oferujemy darmowe korepetycje ze wszystkich przedmiotów szkolnych, na
          poziomach od szkoły podstawowej, aż do matury. Nasi wolontariusze to
          głównie uczniowie szkół ponadpodstawowych, studenci i nauczyciele
          zarówno z polski, jak i zza granicy.
        </p>
      </div>
    </div>
  );
};

export default About;
