// -----------------------------------------------------------------
// --------------     Class Based Component    ---------------------
// -----------------------------------------------------------------
/*
import React, { Component } from 'react';
import axios from 'axios';

export class ResourceList extends Component {
  state = {
    resources: [],
  };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({ resources: response.data });
  }

  // called anytime our component gets updated, i.e, renders because of a parent component or anytime we call setState inside this component
  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
*/

// -----------------------------------------------------------------
// -------------------     USING HOOKS 1     -----------------------
// -----------------------------------------------------------------
/*
From Facebook Team (reactjs.org):
- Hooks solve a wide variety of seemingly unconnected problems in React that we’ve
  encountered over five years of writing and maintaining tens of thousands of components.
- We’ve seen how effect cleanup avoids duplication in componentDidUpdate and componentWillUnmount,
  brings related code closer together, and helps us avoid bugs. We’ve also seen how we can
  separate effects by their purpose, which is something we couldn’t do in classes at all.
*/

// A Hook is a special function that lets you “hook into” React features.

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = resource => {
  // Declare a new state variable called "resources". "setResources" is a function that lets you update "resource"
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource.resource}`);
    setResources(response.data);
  };

  // anytime the component gets rendered or updated. Think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  useEffect(() => {
    fetchResource(resource);

    // Specify how to clean up after this effect (optional):
    // return function cleanup() { ... };
  }, [resource]); // Only re-run the effect if "resource" changes (pass an array as an optional second argument)

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
*/

// -----------------------------------------------------------------
// -------------------     USING HOOKS 2     -----------------------
// -----------------------------------------------------------------
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

const ResourceList = resource => {
  const resources = useResources(resource.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
*/

// -----------------------------------------------------------------
// -------------------     USING HOOKS 3     -----------------------
// -----------------------------------------------------------------
/*
import React from 'react';
import useResources from './useResources';

const ResourceList = resource => {
  const resources = useResources(resource.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
*/
