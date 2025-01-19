'use client';

interface ID {
  id: string;
}

export default function Square({ id }: ID) {
  function onClick() {
    console.log("Clicked");
  }

  return (
    <button onClick={onClick} className="square">
      {id}
    </button>
  );
}
