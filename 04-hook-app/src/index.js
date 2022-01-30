import React from 'react';
import ReactDOM from 'react-dom';

// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
// import { RealExampleRef } from './components/04-UseRef/RealExampleRef';
// import { FocusScreen } from './components/04-UseRef/FocusScreen';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';


import { TodoApp } from './components/08-useReducer/TodoApp';


ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);




