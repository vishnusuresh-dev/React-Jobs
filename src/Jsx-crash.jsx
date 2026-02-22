const Crash = () =>{
  const name = "vishnu";
  let x  = 20;
  let y = 10;
  let names = ["Vishnu", "Jinso", "Bhagya"];
  let loggedIn = true;
  const styles = {
    fontSize : "30px",
    color : "blue"
  }

  return(
    <>
    <div className="text-3xl font-bold underline">Hola! {name}</div>
    <p style={{color: 'red'}}>The sum of {x} and {y} is {x + y}</p>
    {names.map((name,index)=>(
      <p key={ index } style={ styles }>Hi I am, {name}</p>
    ))}
    {loggedIn ? <div className="font-bold">Hello Member</div> : <div className="font-bold">Hello Guest</div>}
    </>
  )
}
export default Crash;