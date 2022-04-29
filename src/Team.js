import React, { Component } from "react";

const Team = () => {
  const members = [
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
    { name: "Anonim Anonimowy", title: "Founder", image: "dummy2.svg" },
  ];
  return (
    <div className="team">
      <h2>Nasz Zespół</h2>
      <div className="members">
        {members.map((member) => {
          return (
            <div className={"member"} key={member.name}>
              <div
                className={"memberPhoto"}
                style={{ backgroundImage: member.image }}
              >
                <img src={member.image} />
              </div>

              <div className={"memberText"}>
                <div className={"memberName"}>
                  <span>{member.name}</span>
                </div>

                <div className={"memberTitle"}>
                  <span>{member.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
