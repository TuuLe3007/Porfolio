import logo from './profile.jpeg';
import './App.css';

const user = {
  name: 'Tu Le',
  imageUrl: {logo},
  imageSize: 90,
};

function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="App-logo"
        src={logo}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

export default App;
