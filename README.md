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
