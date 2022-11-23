import clsx from 'clsx';

type Props = {
  rate?: number;
};

const Rating = ({ rate = 0 }: Props) => {
  return (
    <div className="flex h-16 w-16 flex-row gap-2 bg-primary">
      {[1, 2, 3, 4, 5].map((x, i) => (
        <div
          key={i}
          className={clsx('mask mask--star h-6 w-6 bg-neutral-300', {
            'bg-neutral-300': x > rate,
          })}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
