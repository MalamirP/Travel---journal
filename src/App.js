import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import data from "./data";
import Hero from "./Components/Hero";


function App() {


  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} />
    )
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
export default App;
