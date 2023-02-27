import React from "react";

interface offersArrayType {
  id: number;
  title: string;
  desc: string;
}

const offersArray: offersArrayType[] = [
  {
    id: 1,
    title: "Track company-wide progress",
    desc: `See how your day-to-day tasks fit into the wider vision. Go from
    tracking progress at the milestone level all the way done to the
    smallest of details. Never lose sight of the bigger picture again`,
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    desc: `Set internal delivery estimates and track progress towards company goals. Our customisable dashboard elps you build out the reports you need to keep key stakeholders informed.`,
  },
  {
    id: 3,
    title: "Everything you need in one place",
    desc: `Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.`,
  },
];

const OffersSection = () => {
  return (
    <section className="offers container two-columns">
      <div className="offers__heading">
        <h2 className="primary-color">What's the different about Manage?</h2>
        <p className="secondary-color">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="offers__lists">
        {offersArray.map((el) => (
          <div className="offers__lists-each" key={el.id}>
            <h3 className="title primary-color">
              <span className="number">0{el.id}</span> {el.title}
            </h3>
            <p className="desc secondary-color">{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
