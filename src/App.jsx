import './App.css';
import Calendar from './Calendar';

export default function App() {

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({length: 28}, (x, i) => i + 1)

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <hr />
      <Calendar dates = { dates } days = { days }/>
    </div>
  );
}

