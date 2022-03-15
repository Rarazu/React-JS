import './App.css';
import Test from "./components/Test"
import Employee from './components/Employee'
import Accordion from './components/Accordion'
import Balok from './pages/Balok'

function App() {
  return (
    <div>
      <div className="App">
        <h3 align="center">This is my custom components</h3>
        {
          /**
           * nama element : h3
           * attributes/properties: align
           */
        }

        {/**<Test name="Sunoo" city="Seoul" fontColor="magenta"
        avatar="https://cdn.idntimes.com/content-images/community/2021/12/119864182-117068349984505-5038407251919109998-n-b619f653fb1c2b1965d5375ac1d27a66-9e898aec73d06ec3c8e400b6c8ba8fdc.jpg">
          Sunoo punya saya
          <button>Bismillah</button>
        </Test>
        <Test name="Beomgyu" city="Daegu" fontColor="gray"
        avatar="https://i.pinimg.com/originals/67/73/49/677349b7f0497c1b7312f9e84b2c8ce4.jpg">
          Beomgyu rarazu 
          <button>Aamiin</button>
        </Test>
        <Test name="Jay" city="Amerika" fontColor="navy"
        avatar="https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/hops/2021/10/919407DA-0E4F-421D-A6C9-D7D163CE76E1.jpeg">
          Pengennya jadi adiknya Jay
          <button>Imposibble</button>
      </Test> */}
      <Balok title="Lemari"></Balok>
      <Balok title="Kotak Pensil"></Balok>
      </div>

      
      {/**<Employee 
      name="Rarazu" email="rara@gmail.com"
      img="https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg"
      tgl="2005-03-11"
      telepon="12345" 
      gender="P" 
      divisi="Operator">
      </Employee>

      <Accordion>
      Hello everyone! My name is Rara Zahra Urava, usually called Rara. 
       I'm seventeen years old and currently studying at SMK Telkom Malang
    </Accordion>*/}
      
    </div>
  );
}

export default App;
