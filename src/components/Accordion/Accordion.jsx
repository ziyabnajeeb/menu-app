import { useState } from 'react';
import 'twin.macro';
import { AccordionWrapper } from './AccordionStyles';

import data from '../../data';
import AccordionItem from './AccordionSection/AccordionItem';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  const [toggle, setToggle] = useState(false);

  const toggleOpen = (index) => () => setToggle((toggle) => (toggle === index ? null : index));

  return (
    <AccordionWrapper>
      {questions.map(({ id, title, info }, index) => (
        <AccordionItem key={id} title={title} info={info} toggle={toggle === index} toggleHandler={toggleOpen(index)} />
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
