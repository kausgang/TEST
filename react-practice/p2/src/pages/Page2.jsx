import { useCount } from "../context";

export const Page2 = () => {
  const { count, addOne, state, dispatch } = useCount();

  const handleAddOne = () => {
    // addOne();
    dispatch({
      type: "ADD_ONE",
      payload: { count: state.count + 1 },
    });
  };
  return (
    <>
      <section>
        {/* <p>{count}</p> */}
        <p>{state.count}</p>
        <button onClick={handleAddOne}>Add One</button>
      </section>
    </>
  );
};
