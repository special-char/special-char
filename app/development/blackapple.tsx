import '@/styles/blackapple.css';
import React from 'react';

type Props = {};
const appledata = [
  {
    title: 'Black Apple Watch',
    description: 'Logo, User Interface',
    btn: 'View All Work',
  },
  {
    title: 'Magazine',
    description: 'Logo, User Interface',
    btn: 'View All Work',
  },
  {
    title: 'Conference',
    description: 'Art Direction,Design',
    btn: 'View All Work',
  },
  {
    title: 'Ivor Application',
    description: 'User Interface',
    btn: 'View All Work',
  },
  {
    title: 'Flying to the moon',
    description: 'User Experiences',
    btn: 'View All Work',
  },
];

function Blackapple({}: Props) {
  return (
    <section className="apple">
      <div>
        {appledata.map((x) => (
          <>
            <h1>{x.title}</h1>
            <p>{x.description}</p>
            <button className="btn btn--primary">{x.btn}</button>
          </>
        ))}
      </div>
    </section>
  );
}

export default Blackapple;
