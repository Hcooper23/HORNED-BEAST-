import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Header title="Horned Beast"/>
      <Main body="Please select your favorite images from the ones listed below, you will see a title and a description for all items listed." />
     <Footer closer="Your Opinion Matters!"/>
    </div>
  );
}

export default App;
