import React, { useState } from 'react';

import {
  Accordion,
  AccordionPanel,
  Box,
  Viewport,
  Text,
  TextInput,
} from 'focus';
import { focus } from 'focus/themes';

const renderPanelHeader = (title, active) => (
  <Box direction="row" align="center" pad="medium" gap="small">
    <strong>
      <Text>{title}</Text>
    </strong>
    <Text color="brand">{active ? '-' : '+'}</Text>
  </Box>
);

const CustomHeaderAccordion = () => {
  const [activeIndex, setActiveIndex] = useState([0]);

  return (
    <Viewport theme={focus}>
      <Accordion
        activeIndex={activeIndex}
        onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
      >
        <AccordionPanel
          header={renderPanelHeader('Panel 1', activeIndex.includes(0))}
        >
          <Box pad="medium" background="light-2" style={{ height: '800px' }}>
            <Text>Panel 1 contents</Text>
            <TextInput />
          </Box>
        </AccordionPanel>
        <AccordionPanel
          header={renderPanelHeader('Panel 2', activeIndex.includes(1))}
        >
          <Box pad="medium" background="light-2" style={{ height: '50px' }}>
            <Text>Panel 2 contents</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          header={renderPanelHeader('Panel 3', activeIndex.includes(2))}
        >
          <Box pad="medium" background="light-2" style={{ height: '300px' }}>
            <Text>Panel 3 contents</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Viewport>
  );
};

export const Header = () => <CustomHeaderAccordion />;
