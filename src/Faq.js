import React from "react";

const Faq = () => {
  const questions = [
    {
      question: "Ile kosztują lekcje?",
      answer:
        "Udział w projekcie jest całkowicie darmowy. Opiera się na zasadach dobrowolności i wolontariatu.",
    },

    {
      question: "Kto może udzielać zostać wolontariuszem?",
      answer:
        "Korepetycji może udzielać każda chętna osoba, która chce dzielić się wiedzą i ma opanowany nauczany materiał. Wszyscy, niezależnie od miejsca zamieszkania czy wieku są mile widziani.",
    },
    {
      question: "Komu udzielane są korepetycje?",
      answer:
        "Zgodnie z ideą Kliniki, udzielamy pomocy dzieciom pracowników służby zdrowia. M.in.: lekarzy, pielęgniarek, salowych, ratowników czy laborantów, którzy codziennie z narażeniem własnego zdrowia walczą z pandemią Covid-19. Pomagając w nauce dzieciom, możemy ich wesprzeć i odciążyć. Oczywiście nie odmówimy pomocy nikomu, bez względu na zawód rodziców.",
    },
    {
      question:
        "W jaki sposób mogę wesprzeć Klinikę Matmy, jeśli nie mogę udzielić korepetycji?",
      answer:
        "Opowiedz o Klinice znajomym, przekaż dalej informacje o niej za pomocą mediów społecznościowych. Im więcej osób o nas wie, tym większej liczbie potrzebujących możemy pomóc.",
    },
  ];
  return (
    <div className={"Faq"}>
      <div className={"questionsList"}>
        {questions.map((item) => {
          return (
            <div key={item.question} className={"questionItem"}>
              <h3 className={"question"}>{item.question}</h3>
              <div className={"answer"}>{item.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
