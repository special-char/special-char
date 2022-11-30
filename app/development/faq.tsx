import React from 'react';
import '@/styles/Faq.css';
import Accordian from '@/ui/Accordian';

interface Props {}

const data = [
  {
    id: '1',
    title: 'Can I use Kofo before paying?',
    description:
      'Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.',
  },
  {
    id: '2',
    title: 'Can I use Kofo before paying?',
    description:
      'Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.',
  },
  {
    id: '3',
    title: 'Can I use Kofo before paying?',
    description:
      'Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.',
  },
  {
    id: '4',
    title: 'Can I use Kofo before paying?',
    description:
      'Cras dapibus. Maecenas vestibulum mollis diam.In hac habitasse platea dictumst. Morbi vestibulum volutpat enim. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam dictum felis eu pede mollis pretium. Ut tincidunt tincidunt erat.',
  },
];

const Faq = (props: Props) => {
  return (
    <section id="Faq" className="faq">
      <div className="faq__section ">
        <h2 className="faq__h2">Frequently asked questions</h2>

        <div className="faq__body">
          <Accordian data={data} />
        </div>
      </div>
    </section>
  );
};
export default Faq;
