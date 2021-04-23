import './App.css';

function App(props) {
  return (
    <div className="contenedor">
      <div className="icono"> <i className="fas fa-clock"></i></div>
      <h1 id="cuatro">{props.four%10}</h1>
      <h1 id="tres">{props.three%10}</h1>
      <h1 id="dos">{props.two%10}</h1>
      <h1 id="uno">{props.one%10}</h1>
    </div>
  );
}
export default App;
