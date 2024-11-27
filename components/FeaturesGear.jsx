"use client"
import { useEffect, useRef } from "react";

function FeaturesGear() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 485;
    canvas.height = 485;

    // Clear canvas
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    const nodeCount = 12;
    const nodes = [];

    // Draw main circle
    ctx.beginPath();
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = 4;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Create nodes around the circle
    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      nodes.push([x, y]);

      // Draw node
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) continue; // Skip some connections randomly
        ctx.beginPath();
        ctx.strokeStyle = "#ff1493";
        ctx.moveTo(nodes[i][0], nodes[i][1]);
        ctx.lineTo(nodes[j][0], nodes[j][1]);
        ctx.stroke();
      }
    }

    // Draw outer decorative elements
    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const x1 = centerX + Math.cos(angle) * (radius + 20);
      const y1 = centerY + Math.sin(angle) * (radius + 20);
      const x2 = centerX + Math.cos(angle) * (radius + 40);
      const y2 = centerY + Math.sin(angle) * (radius + 40);

      // Draw decorative line
      ctx.beginPath();
      ctx.strokeStyle = "#404040";
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Draw decorative end point
      ctx.beginPath();
      ctx.fillStyle = "#ff1493";
      ctx.arc(x2, y2, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
}

export default FeaturesGear