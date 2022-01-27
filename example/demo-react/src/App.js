import logo from './logo.svg';
import './App.css';
import compareVersion from '../node_modules/compare-version-plus/dist/compare-version-plus.min';

function App() {
  const result = compareVersion('1.2.3').isAfter('1.1.5');
  console.log('isAfter-result', result);
  return (
    <div>{JSON.stringify(result)}</div>
  );
}

export default App;
