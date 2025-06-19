import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

    // Using our first useState
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

    return (
        <Section id="examples" title="Examples">
          <Tabs ButtonsContainer="menu" buttons={
            <>
            <TabButton isSelected={ selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>
          }>
            {selectedTopic && <TabContent {...EXAMPLES[selectedTopic]} />}
            {!selectedTopic && <div>Please click a Button</div> }
          </Tabs>
        </Section>
    );
}