import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  const coreConcepts = CORE_CONCEPTS.map((concept) => (
    <CoreConcept
      key={concept.title}
      img={concept.image}
      title={concept.title}
      description={concept.description}
    />
  ));

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{coreConcepts}</ul>
    </section>
  );
};

export default CoreConcepts;
