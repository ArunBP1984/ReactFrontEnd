import 'bootstrap/dist/css/bootstrap.min.css';   
import { Cards } from "./components/cards";
import { PageHeader } from "./components/pageheader";
import TopSummary from "./components/topsummary";
import ShowDefinitions from './components/showdefinitions';
// import PageFooter from "./components/pagefooter"

function App() {
  return (
    
    <div className="App"> 
       <PageHeader/>
       <ShowDefinitions/> 
      <TopSummary/>  
      <Cards/>
      {/* <PageFooter/> */}
    </div>  
  );
}

export default App;
