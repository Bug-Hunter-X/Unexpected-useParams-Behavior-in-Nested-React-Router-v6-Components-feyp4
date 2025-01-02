To fix this, you need to make sure that the component using `useParams` is a direct child of a route or receives the parameters as props. Here's how you can modify the code:

```javascript
// App.js (remains the same)
```

```javascript
// ParentComponent.js (modified to pass params)
import { useParams } from 'react-router-dom';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const { id } = useParams();
  return (
    <div>
      <ChildComponent id={id}/>
    </div>
  );
}

export default ParentComponent;
```

```javascript
// ChildComponent.js (modified to receive params as props)
function ChildComponent({ id }) {
  console.log(id); // id will now be correctly populated
  return (
    <div>Child Component</div>
  );
}

export default ChildComponent;
```
By explicitly passing the `id` prop from `ParentComponent` to `ChildComponent`, the `id` parameter is correctly accessible even though `ChildComponent` is not directly a child of a route component.