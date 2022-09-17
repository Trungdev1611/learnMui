import './App.css';
import { styled } from '@mui/system'
import Button from '@mui/material/Button';
const Buttonstyled = styled(Button)({
  color: 'red'
})
function App() {
  return (
    <div className="App">
      <Buttonstyled variant="outlined">Outlined</Buttonstyled>
    </div>
  );
}

export default App;
