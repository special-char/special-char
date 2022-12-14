type AccordianType = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  data: [AccordianType];
};

const Accordian = ({ data }: Props) => {
  return (
    <>
      {data.map((val) => (
        <details key={val.id}>
          <summary>{val.title}</summary>
          <p>{val.description}</p>
        </details>
      ))}
    </>
  );
};

export default Accordian;
