/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Wrangler.glb 
*/

import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Wrangler(props) {
  const { nodes, materials } = useGLTF('models/Wrangler.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.146}>
      <mesh geometry={nodes.BODY.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 || overlay==34 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
        <mesh geometry={nodes.Object_2.geometry} material={materials.glass_back__02} />
        <mesh geometry={nodes.Object_30001.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.support_color} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.headligt_back_red} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.headligt_back_02} />
        <mesh geometry={nodes.Object_27_1.geometry} material={materials.glass_front_bl} />
        <mesh geometry={nodes.Object_27_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_27_3.geometry} material={materials.DISK} />
        <mesh geometry={nodes.Object_27_4.geometry} material={materials.base} />
        <mesh geometry={nodes.Object_27_5.geometry} material={materials.glass01} />
        <mesh geometry={nodes.Object_27_6.geometry} material={materials.headligt_front_03} />
        <mesh geometry={nodes.Object_27_7.geometry} material={materials.headligt_front_05} />
        <mesh geometry={nodes.Object_27_8.geometry} material={materials.mirror} />
        <mesh geometry={nodes.Object_27_9.geometry} material={materials.glass_white__01} />
        <mesh geometry={nodes.Object_27_10.geometry} material={materials.gird} />
        <mesh geometry={nodes.Object_27_11.geometry} material={materials.salon} />
        <mesh geometry={nodes.Object_27_12.geometry} material={materials.headligt_front_01} />
      </group>
    </group>
  )
}

useGLTF.preload('/Wrangler.glb')
