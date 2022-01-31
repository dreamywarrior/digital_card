import Image from "./Image"
import Icons from "./Icons"
import About from "./About"
import Interests from "./Interests"
import Intro from "./Intro"
import Links from "./Links"
export default function App() {
  return (
    <div className = "holder">
      <Image />
      <Intro />
      <Links />
      <About />
      <Interests />
      <Icons />
    </div>
  );
}

