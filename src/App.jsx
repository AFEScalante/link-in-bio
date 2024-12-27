import { useRef } from "react";
import Header from "./components/Header";
import useVanta from "./hooks/use-vanta";
import LinkList from "./components/LinkList";
import { useEffect } from "react";

function App() {
  const vantaRef = useRef();
  const mainRef = useRef();
  useVanta(vantaRef);

  useEffect(() => {
    setTimeout(() => {
      mainRef.current.style.opacity = 1;
      mainRef.current.style.filter = "blur(0px)";
    }, 1000);
  }, []);

  return (
    <>
      <div id="vanta" ref={vantaRef}></div>
      <main ref={mainRef}>
        <Header />
        <LinkList />
      </main>
    </>
  );
}

export default App;
