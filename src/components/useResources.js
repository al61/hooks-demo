import { useState, useEffect } from 'react';
import axios from 'axios';

// Now we can resuse this function anywhere inside our project
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

export default useResources;

/*
  - Traditionally in React, we’ve had two popular ways to share stateful logic between 
    components: render props and higher-order components. We now have Hooks to
    solve many of the same problems without forcing you to add more components to the tree.
  - A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks
*/
