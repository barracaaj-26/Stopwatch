import Color from "@/components/Color";

export default function Home() {

  const numbers = 19;
  const colors = ['skyblue', 'purple', 'pink'];

  function buttonClick() {
    alert('Button Cliked!');
  }

  return (
    <div>
      <h1>Barraca, AJ C.</h1>
      <h2>Age: {numbers + "yrs. old"}</h2>
      <ul>
        {colors.map((value, index) => {
          return <Color buttonClicked={buttonClick}
                        key={index}
                        color={value}
                        fontSize={12} />
        })}
      </ul>
    </div>
  )
}