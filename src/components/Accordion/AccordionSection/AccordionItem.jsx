import {
  AccordionBody,
  AccordionContent,
  AccordionHeader,
  AccordionHeading,
  AccordionIcon,
  AccordionSection,
  AccordionText,
} from './AccordionItemStyles';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';

const AccordionItem = ({ id, title, info, toggle, toggleHandler }) => (
  <AccordionSection key={id}>
    <AccordionHeader>
      <AccordionHeading>{title}</AccordionHeading>
      <AccordionIcon onClick={toggleHandler}>
        {toggle ? <Minus tw="text-lg h-7 w-7 text-amber-500" /> : <Plus tw="text-lg h-7 w-7 text-amber-500" />}
      </AccordionIcon>
    </AccordionHeader>
    {toggle && (
      <AccordionBody>
        <AccordionContent>
          <AccordionText>{info}</AccordionText>
        </AccordionContent>
      </AccordionBody>
    )}
  </AccordionSection>
);

export default AccordionItem;
