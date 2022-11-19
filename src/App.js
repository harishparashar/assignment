import './App.css';
import DemoTable from './Componenets/Tabels';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from './Componenets/AddForm';
import EditForm from './Componenets/EditForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<DemoTable />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/edit/:id" element={<EditForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
