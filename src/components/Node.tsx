import './Node.css'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

type NodeProps = {
  startX: number;
  startY: number;
  bounds?: string;
  color?: string;
};

function Node({startX, startY, bounds = ".app_center", color = "#ff0000" } : NodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);  

  //Arrow function to handle the drag event
  useGSAP(() => { 
  
    if (nodeRef.current) {
      Draggable.create(nodeRef.current, {
        type: "x,y",
        bounds: bounds }
      )
    }
  })


  return (
    <div ref = {nodeRef} className="node-container relative" style={{ left: startX, top: startY, backgroundColor: color }}>
        <div className="node-header p-2 text-white" style={{ backgroundColor: color }}> 
            <p>Node</p>
        </div> 
        <div className="node-body bg-gray-200 p-10 pt-20 pb-20">
            <p>Node body content goes here.</p>
            <div className="output-knot absolute bottom-2 right-0 h-4 w-4" style={{ backgroundColor: color }}> 

            </div>
            <div className="input-knot absolute top-14 left-0 h-4 w-4" style={{ backgroundColor: color }}>       

            </div>    
        </div>
        
      
    </div>
  )
}

export default Node