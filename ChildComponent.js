In React Router Dom v6,  using the `useParams` hook inside a component that's not directly rendered by a route can lead to unexpected behavior. If the parent component that holds the component using `useParams` is not directly associated with a route, `useParams` might return empty or stale values. This often happens when you have nested routes and attempt to access parameters from a deeply nested component that isn't directly a child of the route component.

Example:
```javascript
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ParentComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

```javascript
// ParentComponent.js
import { useParams } from 'react-router-dom';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent/>
    </div>
  );
}

export default ParentComponent;
```

```javascript
// ChildComponent.js
import { useParams } from 'react-router-dom';

function ChildComponent() {
  const { id } = useParams();
  console.log(id); // id will be undefined
  return (
    <div>Child Component</div>
  );
}

export default ChildComponent;
```