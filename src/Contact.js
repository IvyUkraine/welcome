import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./Contact.module.css";

const Contact = () => {
  const contacts = [
    {
      name: "Email Ogólny",
      title: "Sprawy wszelakie",
      email: "kontakt@ivyukraine.com",
    },
    {
      name: "Krzysztof Daniewski",
      title: "Dyrektor Akademii Ivy Poland",
      email: "krzysztof.daniewski@ivypoland.pl",
    },
    {
      name: "Anonim Anonimopoulos",
      title: "Kierownik Projektu",
      email: "Constantin@gmail.com",
    },
    {
      name: "Olivia Drost",
      title: "Kontakt dla Mediów",
      email: "olivia.drost@ivypoland.pl",
    },
  ];
  return (
    <div className={"Contact"}>
      <h2>Kontakt</h2>
      <div className={"socialMedia"}>
        <div className={"socialMediaItem"}>
          <SocialIcon bgColor={"white"} url="https://instagram.com/jaketrent" />
        </div>
        <div className={"socialMediaItem"}>
          <SocialIcon bgColor={"white"} url="https://twitter.com/jaketrent" />
        </div>

        <div className={"socialMediaItem"}>
          <SocialIcon bgColor={"white"} url="https://facebook.com/jaketrent" />
        </div>

        <div className={"socialMediaItem"}>
          <SocialIcon bgColor={"white"} url="https://linkedin.com/jaketrent" />
        </div>
      </div>
      <div className={"contactList"}>
        {contacts.map((contact) => {
          return (
            <div key={contact.name} className={"contactItem"}>
              <div className={"contactName"}>{contact.name}</div>
              <div className={"contactTitle"}>{contact.title}</div>
              <a href={`mailto:${contact.email}`} className={"contactEmail"}>
                {contact.email}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
