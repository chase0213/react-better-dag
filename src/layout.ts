import type { DAG, PositionedNode } from "./types"

const NODE_WIDTH = 150
const NODE_HEIGHT = 40
const HORIZONTAL_SPACING = 100
const VERTICAL_SPACING = 100

export function layoutDAG(dag: DAG): PositionedNode[] {
  const nodeMap = new Map(dag.nodes.map((node) => [node.id, { ...node, position: { x: 0, y: 0 } }]))
  const visited = new Set<string>()

  function dfs(nodeId: string, depth: number, order: number): void {
    if (visited.has(nodeId)) return
    visited.add(nodeId)

    const node = nodeMap.get(nodeId)!
    node.position = {
      x: depth * (NODE_WIDTH + HORIZONTAL_SPACING),
      y: order * (NODE_HEIGHT + VERTICAL_SPACING),
    }

    node.children.forEach((childId, index) => {
      dfs(childId, depth + 1, order + index)
    })
  }

  // Find root nodes (nodes with no incoming edges)
  const rootNodes = new Set(dag.nodes.map((node) => node.id))
  dag.edges.forEach((edge) => rootNodes.delete(edge.target))

  // Perform DFS from each root node
  Array.from(rootNodes).forEach((rootId, index) => {
    dfs(rootId, 0, index)
  })

  return Array.from(nodeMap.values())
}
