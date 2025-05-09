const nodes = {
  'A': {
    inAccessibles: ['C', 'I', 'G'],
    blocking: [],
  },
  'B': {
    inAccessibles: ['H'],
    blocking: ['AC', 'CA'],
  },
  'C': {
    inAccessibles: ['A', 'G', 'I'],
    blocking: [],
  },
  'D': {
    inAccessibles: ['F'],
    blocking: ['AG', 'GA'],
  },
  'E': {
    inAccessibles: [],
    blocking: ['AI', 'BH', 'CG', 'DF', 'FD', 'GC', 'HB', 'IA'],
  },
  'F': {
    inAccessibles: ['D'],
    blocking: ['CI', 'IC'],
  },
  'G': {
    inAccessibles: ['A', 'C', 'I'],
    blocking: [],
  },
  'H': {
    inAccessibles: ['B'],
    blocking: ['GI', 'IG'],
  },
  'I': {
    inAccessibles: ['G', 'A', 'C'],
    blocking: [],
  },
};

function countPatternsFrom(firstPoint, length) {
  if (length < 1 || length > 9) return 0;
  if (length === 1) return 1;

  let window = [];
  for(let i = 0; i < length-1; i++){
    if(!window.length) {
      window = [makeWindowNode(firstPoint)];
    } else{
      window = window.reduce((acc, wn) => {
        return acc.concat(
          wn.accessibles.map(
            n => makeWindowNode(n, wn.visited.concat(wn.node))
          )
        );
      }, []);
    }
  }
  return window.reduce((acc, wn) => acc + wn.accessibles.length, 0);
}

function makeWindowNode(node, visited = []) {
  return {
    node: node,
    accessibles: getAccessibles(node, visited),
    visited: visited
  };
}

function getAccessibles(node, visited) {
  return Object.keys(nodes).filter((n) => {
    if(node === n || visited.includes(n)) return false;

    const inAccessibles = nodes[node].inAccessibles.filter(
      (nn) => !visited.reduce(
          (acc, v) => acc || nodes[v].blocking.includes(node+n),
          false
        )
      );
    return !inAccessibles.includes(n);
  });
}
