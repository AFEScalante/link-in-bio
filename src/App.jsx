import { useRef } from "react";
import Header from "./components/Header";
import useVanta from "./hooks/use-vanta";
import LinkList from "./components/LinkList";

function App() {
  const vantaRef = useRef();
  useVanta(vantaRef);

  return (
    <>
      <div id="vanta" ref={vantaRef}></div>
      <main>
        <Header />
        <LinkList />
      </main>
    </>
  );
}

export default App;
