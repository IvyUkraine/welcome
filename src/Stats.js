import React from "react";

const Stats = () => {
  const statsData = [
    {
      value: 158,
      description: "tutorów w naszej społeczności",
    },
    {
      value: 765,
      description: "nawiązanych połączeń tutor/uczeń",
    },
    {
      value: 16,
      description: "krajów pochodzenia uczniów",
    },
  ];
  return (
    <div className={"Stats"}>
      <div className={"statsItems"}>
        {statsData.map((item) => {
          return (
            <div key={item.description} className={"statsItem"}>
              <div className={"statValue"}> {item.value}</div>
              <div className={"statDescription"}> {item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
