import '@/styles/card.css';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import '@/styles/socialicon.css';

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={data.url} alt="image" fill />
      </div>
      <div className="card__body">
        <div className="flex content-start items-baseline gap-3">
          <button className="btn btn--white py-2 px-2">{data.btn}</button>
          <p className="card__body__date">{data.date}</p>
        </div>
        <h3 className="card__body__title">{data.title}</h3>
        <Link href={data.href} className="text-base">
          Read More
        </Link>
      </div>
    </div>
  );
}
