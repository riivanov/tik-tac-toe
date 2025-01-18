
interface ID {
  id: string
}

export default function Square({id}: ID) {
  return <button className="square">{id}</button>;
}