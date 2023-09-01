import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState("");

  const handleDrag = (e, cardType) => {
    setCard(cardType);
    console.log(card);
  };

  const handleDrop = (e) => {
    setCards([...cards, card]);
    console.log(cards);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex">
      <div className="m-3 flex-col w-1/5  ">
        <h1
          draggable
          onDragStart={(e) => handleDrag(e, "element 1")}
          className="px-4 py-2 m-2 bg-slate-500 w-fit"
        >
          part 1
        </h1>
        <h1
          draggable
          onDragStart={(e) => handleDrag(e, "element 2")}
          className="px-4 py-2 m-2 bg-slate-500 w-fit"
        >
          part 2
        </h1>
        <h1
          draggable
          onDragStart={(e) => handleDrag(e, "element 3")}
          className="px-4 py-2 m-2 bg-slate-500 w-fit"
        >
          part 3
        </h1>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border border-slate-600 border-dotted p2 w-4/5 h-60 m-2"
      >
        {cards.map((card, index) => {
          return <>{card}</>;
        })}
      </div>
    </div>
  );
}

export default App;
