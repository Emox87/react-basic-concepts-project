import CoreConcept from "./CoreConcept";

import { CORE_CONCEPTS } from "../../data-with-examples.js";

const CoreConcepts = () => {
  const coreConceptsContent = CORE_CONCEPTS.map((conceptItem) => (
    <CoreConcept {...conceptItem} key={conceptItem.title} />
  ));

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{coreConceptsContent}</ul>
    </section>
  );
};

export default CoreConcepts;
