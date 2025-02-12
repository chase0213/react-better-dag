import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
   data: { label: string };
}

export default function CustomNode({ data }: CustomNodeProps) {
   return (
      <div
         style={{
            border: '2px solid oklch(0.869 0.005 56.366)',
            borderRadius: '4px',
            backgroundColor: 'white',
            padding: '6px 12px',
            boxShadow: '0 2px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
         }}
      >
         <Handle
            type="target"
            position={Position.Left}
            style={{
               left: '-4px',
               backgroundColor: 'oklch(0.704 0.14 182.503)',
               height: '10px',
               width: '10px',
            }}
         />
         <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{data.label}</div>
         <Handle
            type="source"
            position={Position.Right}
            style={{
               right: '-4px',
               backgroundColor: 'oklch(0.704 0.14 182.503)',
               height: '10px',
               width: '10px',
            }}
         />
      </div>
   );
};
