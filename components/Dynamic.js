import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Piano"), {
  ssr: false,
});

function App() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}

export default App;
