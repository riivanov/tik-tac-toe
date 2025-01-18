
interface ID {
  id: number
}

export default function Square({id}: ID) {
  return <button className="square">{id}</button>;
}