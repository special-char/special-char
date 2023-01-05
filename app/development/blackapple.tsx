import '@/styles/blackapple.css';
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
        <button className="btn btn--primary">View All Work</button>
      </div>
      <div>
        <h1>Magazine</h1>
      </div>
      <div>
        <p className="apple__p">Logo, User Interface</p>
        <button className="btn btn--primary">View All Work</button>
      </div>
      <div>
        <h1>Conference</h1>
      </div>
      <div>
        <p className="apple__p">Art Direction, Design</p>
        <button className="btn btn--primary">View All Work</button>
      </div>
      <div>
        <h1>Ivor Application</h1>
      </div>
      <div>
        <p className="apple__p">User Interface</p>
        <button className="btn btn--primary">View All Work</button>
      </div>
      <div>
        <h1>Flying to the moon</h1>
      </div>
      <div>
        <p className="apple__p">User Experiences</p>
        <button className="btn btn--primary">View All Work</button>
      </div>
    </section>
  );
}

export default Blackapple;
