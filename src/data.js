import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Gandalf",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "Saruman",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Sauron",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "Radaghast",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  Gandalf: {
    title: "Gandalf",
    description:
      "Gandalf the Grey, also known as Olórin, Mithrandir, Tharkûn, and Incánus. The wisest Maia and a Maia of Manwë and Varda. He was also a member of the White Council. After he was killed by a Balrog, he was sent back by Eru as Gandalf the White, the new chief of Istari and the Enemy of Sauron. Wielder of the sword Glamdring and keeper of Narya, the Ring of Fire. Successful in his mission to defeat Sauron, he returned to Valinor at the end of the Third Age.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Saruman: {
    title: "Saruman",
    description:
      "Saruman the White, also known as Curumo, Curunír, Tarindor,Sharku, and Sharkey. A Maia of Aulë. Originally the chief and greatest of the Istari order, as well as head of the White Council. After becoming the duplicitous vassal of Sauron, he renamed himself Saruman of Many Colours. Cast out from both the White Council and the Istari order by a resurrected Gandalf. Ultimately killed by his own minion, Gríma Wormtongue, at the end of the War of the Ring.",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Sauron: {
    title: "Sauron",
    description:
      "Sauron (Quenya; [ˈsaʊron] or [ˈθaʊron]), the eponymous Lord of the Rings, was the greatest subversive Maia, maker of the One Ring, renowned disciple of Aulë, and chief agent of Morgoth in the Elder Days. After Morgoth's ousting by the Valar, Sauron became the second Dark Lord and sought to conquer most of Arda through guileful trickery, with the Rings of Power or with overwhelming armies.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  Radaghast: {
    title: "Radaghast",
    description:
      "Radagast the Brown, also known as Aiwendil and Hrávandil. A Maia of Yavanna. A less notable member of the White Council. A lover of nature who mostly avoided participating the War of the Ring. He eventually returned to Valinor.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
