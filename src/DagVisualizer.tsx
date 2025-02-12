"use client"

import React from "react"
import { useMemo } from "react"
import ReactFlow, { MiniMap, Controls, Background, type Edge, type Node, type NodeTypes } from "reactflow"
import "reactflow/dist/style.css"
import type { DAG } from "./types"
import { layoutDAG } from "./layout"
import CustomNode from "./CustomNode"

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

interface DAGVisualizerProps {
  dag: DAG
}

export function DAGVisualizer({ dag }: DAGVisualizerProps) {
  const { nodes, edges } = useMemo(() => {
    const positionedNodes = layoutDAG(dag)
    const nodes: Node[] = positionedNodes.map((node) => ({
      id: node.id,
      type: "custom",
      data: { label: node.label },
      position: node.position,
    }))

    const edges: Edge[] = dag.edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: "smoothstep",
      animated: true,
    }))

    return { nodes, edges }
  }, [dag])

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView attributionPosition="bottom-left">
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}
