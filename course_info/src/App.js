const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.parts[0]} exercise={props.exercises[0]}/>
      <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </>
  );
};
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};
const Part=(props)=>{
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  );
};

export default App;
