import './App.css';

import Classify from './components/classify.js';
import Conversation from './components/conversation.js';
import Tickets from './components/tickets.js';

function App() {
  return (
    <div className="App">
      <Tickets></Tickets>
      <Classify></Classify>
      <Conversation></Conversation>
    </div>
  );
}

export default App;
