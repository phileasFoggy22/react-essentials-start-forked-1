import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const hobbits = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gollum",
  "Legolas",
  "Gimli",
  "Aragorn",
  "Boromir",
  "Faramir",
  "Gandalf",
  "Radagast",
  "Saruman",
  "Sauron",
  "Elrond",
];

function genRandomHobbit(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = hobbits[genRandomHobbit(hobbits.length)];
  const leftOut = hobbits[genRandomHobbit(hobbits.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Hobbit Quintessentials</h1>
      <p>
        Fundamental Hobbit concepts of how to travel from the Shire to Mordor
        without loss of hobbit life. Except {leftOut}.
      </p>
      <h1>Go {description}!</h1>
    </header>
  );
}
