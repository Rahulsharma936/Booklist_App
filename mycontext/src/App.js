
import Booklist from "./components/BookList";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import AuthToggle from "./components/AuthToggle";
import BookContextProvider from "./contexts/BookContext";


function App() {
  
  
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
      <Booklist />
      </BookContextProvider>
      <ThemeToggle />
      <AuthToggle />

        </AuthContextProvider>
    
      </ThemeContextProvider>
      
      
        
    </div>
  );
}

export default App;
