import '@/styles/blackapple.css';
import Link from 'next/link';
import React from 'react';

type Props = {};

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
