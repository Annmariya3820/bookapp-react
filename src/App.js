import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewallBook from './components/ViewallBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<AddBook/>}/>
    <Route path='/search' element={<SearchBook/>}/>
    <Route path='/delete' element={<DeleteBook/>}/>
    <Route path='/viewall' element={<ViewallBook/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
