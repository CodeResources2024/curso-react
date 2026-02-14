import { useState } from "react";

interface Props {
  name: string;
  quantity: number
}


export const ItemCounter = ({ name, quantity }: Props) => {

  const [count, setCount] = useState(quantity)


  const handlAdd = () => {

    setCount(count + 1);
  }
  const handlRest = () => {
    if (count === 1) return;
    setCount(count - 1);
  }


  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
    }}>

      <span style={{ width: 100 }}>{name}</span>
      <button onClick={handlAdd}>+1</button>
      <span>{count}</span>
      <button

        onClick={handlRest}
      >-1</button>
    </section>
  );
};
