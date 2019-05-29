/////////////////////   CLASS BASED COMPONENT

import React, { Component } from 'react';

export class App extends Component {
  state = { resource: 'posts' };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
          <button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;

/////////////////////   USING HOOKS 1
/*
import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
*/

/////////////////////   USING HOOKS 2
/*
import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
*/

/////////////////////   USING HOOKS 3
/*
import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
*/
