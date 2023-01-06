import '@/styles/blackapple.css';
import Link from 'next/link';
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
        <h1>Black Apple Watch</h1>
      </div>
      <div>
        <p className="apple__p">Logo, User Interface</p>
        <Link href="/" className="btn btn--primary">
          View All Work
        </Link>
      </div>
      <div>
        <h1>Magazine</h1>
      </div>
      <div>
        <p className="apple__p">Logo, User Interface</p>
        <Link href="/" className="btn btn--primary">
          View All Work
        </Link>
      </div>
      <div>
        <h1>Conference</h1>
      </div>
      <div>
        <p className="apple__p">Art Direction, Design</p>
        <Link href="/" className="btn btn--primary">
          View All Work
        </Link>
      </div>
      <div>
        <h1>Ivor Application</h1>
      </div>
      <div>
        <p className="apple__p">User Interface</p>
        <Link href="/" className="btn btn--primary">
          View All Work
        </Link>
      </div>
      <div>
        <h1>Flying to the moon</h1>
      </div>
      <div>
        <p className="apple__p">User Experiences</p>
        <Link href="/" className="btn btn--primary">
          View All Work
        </Link>
      </div>
    </section>
  );
}

export default Blackapple;
