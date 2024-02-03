import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [wizard, setWizard] = useState();
  function onSelected(selectedWizard) {
    setWizard(selectedWizard);
  }
  let wizardContent = <p>Please Select a Wizard</p>;

  if (wizard) {
    wizardContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[wizard].title}</h3>
        <p>{EXAMPLES[wizard].description}</p>
        <pre>
          <code>{EXAMPLES[wizard].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Wizards">
      <Tabs
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={wizard === "Gandalf"}
              onClick={() => onSelected("Gandalf")}
            >
              Gandalf
            </TabButton>
            <TabButton
              isSelected={wizard === "Saruman"}
              onClick={() => onSelected("Saruman")}
            >
              Saruman
            </TabButton>
            <TabButton
              isSelected={wizard === "Sauron"}
              onClick={() => onSelected("Sauron")}
            >
              Sauron
            </TabButton>
            <TabButton
              isSelected={wizard === "Radaghast"}
              onClick={() => onSelected("Radaghast")}
            >
              Radaghast
            </TabButton>
          </>
        }
      >
        {wizardContent}
      </Tabs>
    </Section>
  );
}
