import React, {
  Suspense, useRef, useState, useEffect,
} from 'react';
import { Canvas } from 'react-three-fiber';
import { ContactShadows, useGLTF, OrbitControls } from 'drei';
import { proxy, useProxy } from 'valtio';
import './index.css';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';

import Widget from './Widget/index';

const data = [
  { name: 'Page A', increment: 200 },
  { name: 'Page B', increment: 1000 },
  { name: 'Page C', increment: 600 },
  { name: 'Page D', increment: 1600 },
  { name: 'Page D', increment: 1000 },
  { name: 'Page H', increment: 2260 },
  { name: 'Page K', increment: 400 },
];

const state = proxy({
  current: null,
  items: {
    capteur: '#ffffff',
    capteurr: '#ffffff',
  },
});

function Shoe() {
  const ref = useRef();
  const snap = useProxy(state);
  const group = useRef();
  const { nodes, materials } = useGLTF('/static/3d/example.glb');
  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>';
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`;

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, snap.items]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group ref={group} dispose={null}>
      <mesh
        material={materials['Material.001']}
        geometry={nodes.Cube.geometry}
        position={[-2.93, -2.38, -2.19]}
        scale={[5.3, 0.12, 4.82]}
      />
      <group position={[0.77, -2.41, 1.01]}>
        <mesh material={materials.Wall2_inside} geometry={nodes.Wall_1.geometry} />
        <mesh material={materials.Wall2_outside} geometry={nodes.Wall_2.geometry} />
        <mesh material={materials.Wall2_cuts} geometry={nodes.Wall_3.geometry} />
      </group>
      <mesh material={materials.Baseboard_material} geometry={nodes.Baseboard.geometry} />
    </group>
  );
}

function Picker() {
  const snap = useProxy(state);
  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
      {snap.current === 'default' ? (
        <div className="picker">
          <Widget styleName="gx-card-full">
            <div className="gx-actchart gx-px-3 gx-pt-3 gx-pb-2 gx-d-flex gx-flex-row">
              <h2 className="gx-mb-0 gx-mr-2 gx-fs-lg">
                84%
                {' '}
                <i className="icon icon-menu-up gx-fs-sm" />
              </h2>
              <p className="gx-mb-0 gx-text-grey gx-fs-sm">Increment in Active users</p>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip />
                <defs>
                  <linearGradient id="color07" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#FF557F" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#6757DE" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="increment"
                  stackId="2"
                  strokeWidth={0}
                  stroke="#4D95F3"
                  fill="url(#color07)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Widget>
        </div>
      ) : null}
    </div>
  );
}

export default function CubeCanvas() {
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 2]} camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <Shoe />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <Picker />
    </>
  );
}
