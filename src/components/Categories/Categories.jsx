import 'twin.macro';
import Button from '../Button/Button';
import { Flex } from '../ui/UITags';

const Categories = ({ categories, filterItems }) => (
  <Flex tw="max-w-full flex-nowrap items-center justify-between overflow-x-auto py-4 md:justify-center [&>button]:shrink-0">
    {categories.map((category) => (
      <Button key={category} variant="ghost" isSmall onClick={() => filterItems(category)}>
        {category}
      </Button>
    ))}
  </Flex>
);

export default Categories;
