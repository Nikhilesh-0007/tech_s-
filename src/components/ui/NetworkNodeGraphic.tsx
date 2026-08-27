import { useEffect, useRef } from 'react';

interface NetworkNodeGraphicProps {
  className?: string;
  dark?: boolean; // If true, renders white nodes/lines for dark backgrounds
  nodeCount?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function NetworkNodeGraphic({ className = '', dark = false, nodeCount = 50 }: NetworkNodeGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    const maxDistance = 120; // Maximum distance to connect nodes with lines
    const mouseRadius = 150; // Radius of mouse connection influence

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initNodes();
      if (prefersReducedMotion) {
        drawStaticGrid();
      }
    };

    // Initialize Nodes
    const initNodes = () => {
      nodes = [];
      const densityMultiplier = (canvas.width * canvas.height) / 400000;
      const count = Math.max(15, Math.min(nodeCount, Math.floor(nodeCount * densityMultiplier)));
      
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // Slow speed
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5, // 1.5px to 3.5px dots
        });
      }
    };

    // Colors based on dark mode setting
    const nodeColor = dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 106, 47, 0.4)';
    const lineColor = dark ? '255, 255, 255' : '0, 106, 47';

    // Draw Static Grid (for prefers-reduced-motion)
    const drawStaticGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update Node positions & bounce
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections (attract visual line to cursor)
      const mouse = mouseRef.current;
      if (mouse.x > -500) {
        for (let i = 0; i < nodes.length; i++) {
          const dist = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.25;
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw node particles
      for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Setup mouse listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!prefersReducedMotion) {
      animate();
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (!prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [dark, nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full block pointer-events-auto ${className}`}
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
export default NetworkNodeGraphic;
