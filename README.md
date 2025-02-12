# react-better-dag

A beautiful and easy-to-use Directed Acyclic Graph (DAG) visualization library for React applications, built on top of ReactFlow.

## Features

- 🎯 Simple API for visualizing DAG structures
- 🎨 Clean and modern design with customizable nodes
- 📐 Automatic layout calculation
- 🔄 Smooth animations for edges
- 🎮 Interactive controls and minimap
- 📱 Responsive design

## Installation

```bash
npm install react-better-dag
or
yarn add react-better-dag
```

Make sure you have the peer dependencies installed:


```bash
npm install react react-dom reactflow
or
yarn add react react-dom reactflow
```

## Usage

```tsx
import { DAGVisualizer } from 'react-better-dag';
// Define your DAG structure
const dag = {
  nodes: [
    { id: '1', label: 'Node 1', children: ['2', '3'] },
    { id: '2', label: 'Node 2', children: ['4'] },
    { id: '3', label: 'Node 3', children: ['4'] },
    { id: '4', label: 'Node 4', children: [] },
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', label: '' },
    { id: 'e1-3', source: '1', target: '3', label: '' },
    { id: 'e2-4', source: '2', target: '4', label: '' },
    { id: 'e3-4', source: '3', target: '4', label: '' },
  ],
};
function App() {
  return <DAGVisualizer dag={dag} />;
}
```

## TypeScript Definitions

```typescript
interface DAG {
  nodes: DAGNode[];
  edges: DAGEdge[];
}
interface DAGNode {
  id: string;
  label: string;
  children: string[];
}
interface DAGEdge {
  id: string;
  source: string;
  target: string;
  label: string;
}
```

This README provides a good overview of your library, including:
- A brief description of what it does
- Key features
- Installation instructions
- Usage example with code
- API documentation
- Type definitions
- Feature list
- Contributing and license information

The library itself is a React component that visualizes DAGs (Directed Acyclic Graphs) with the following key components:
- DagVisualizer: The main component that renders the graph
- CustomNode: A styled node component
- layout.ts: Contains the layout algorithm using DFS to position nodes
- types.ts: TypeScript definitions for the DAG structure

The library uses ReactFlow as its foundation and adds:
- Automatic layout calculation
- Custom styled nodes
- Animated edges
- A clean, modern design
- Type safety with TypeScript

Would you like me to expand on any particular aspect of the README or the library itself?
