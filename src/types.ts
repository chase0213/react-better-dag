export interface DAGNode {
    id: string
    label: string
    children: string[]
}

export interface PositionedNode extends DAGNode {
    position: { x: number; y: number }
}

export interface DAGEdge {
    id: string
    source: string
    target: string
    label: string
}

export interface DAG {
    nodes: DAGNode[]
    edges: DAGEdge[]
}
