import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_28: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_37: THREE.Mesh
    Object_39: THREE.Mesh
    Object_41: THREE.Mesh
    Object_43: THREE.Mesh
    Object_45: THREE.Mesh
    Object_47: THREE.Mesh
    Object_49: THREE.Mesh
    Object_51: THREE.Mesh
    Object_53: THREE.Mesh
    Object_55: THREE.Mesh
    Object_57: THREE.Mesh
    Object_59: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_63: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_76: THREE.Mesh
    Object_78: THREE.Mesh
    Object_80: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_86: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_94: THREE.Mesh
    Object_95: THREE.Mesh
    Object_96: THREE.Mesh
    Object_97: THREE.Mesh
    Object_98: THREE.Mesh
    Object_100: THREE.Mesh
    Object_101: THREE.Mesh
    Object_102: THREE.Mesh
    Object_103: THREE.Mesh
    Object_104: THREE.Mesh
    Object_106: THREE.Mesh
    Object_108: THREE.Mesh
    Object_110: THREE.Mesh
    Object_112: THREE.Mesh
  }
  materials: {
    bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004: THREE.MeshPhysicalMaterial
    ['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021EngineA_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021Carbon1_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha5A_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021InteriorA_Material1: THREE.MeshPhysicalMaterial
    phong2: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha6A_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha7A_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha8A_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1: THREE.MeshPhysicalMaterial
    dark: THREE.MeshStandardMaterial
    bBMW_M4CompetitionG82TNR0_2021LightA_Material1: THREE.MeshPhysicalMaterial
    bBMW_M4CompetitionG82TNR0_2021ManufacturerPlateA_Material1: THREE.MeshPhysicalMaterial
    glasswindshiled: THREE.MeshPhysicalMaterial
    red_glass: THREE.MeshPhysicalMaterial
    emit: THREE.MeshStandardMaterial
    glass: THREE.MeshStandardMaterial
    wmit_red: THREE.MeshStandardMaterial
    bBMW_M4CompetitionG82TNR0_2021Base_Material1: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['disk.001']: THREE.MeshStandardMaterial
    main: THREE.MeshStandardMaterial
    metalblack: THREE.MeshStandardMaterial
    sidetyre: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export function Car(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/bmw_m4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name='bInterior_Geo_lodA_Interior_Geo_lodA_BMW_M4Competition_cd6001_16'
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      >
        <mesh
          name='Object_36'
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.bBMW_M4CompetitionG82TNR0_2021InteriorA_Material1}
        />
        <mesh
          name='Object_37'
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.phong2}
        />
      </group>
      <group
        name='bKit0_Paint_Geo_lodA_Kit0_Paint_Geo_lodA_BMW_M4Competi_f24001_27'
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      >
        <mesh
          name='Object_59'
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={
            materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004
          }
        />
        <mesh
          name='Object_60'
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.glasswindshiled}
        />
      </group>
      <group
        name='bKit0_Window_Geo_lodA_Kit0_Window_Geo_lodA_BMW_M4Compe_252001_28'
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      >
        <mesh
          name='Object_62'
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.glasswindshiled}
        />
        <mesh
          name='Object_63'
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials.red_glass}
        />
        <mesh
          name='Object_64'
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={
            materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004
          }
        />
      </group>
      <mesh
        name='Object_4'
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_6'
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004}
        position={[0, 4.614, 4.994]}
      />
      <mesh
        name='Object_8'
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_10'
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_12'
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_14'
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_16'
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_18'
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
      />
      <mesh
        name='Object_20'
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        scale={14.746}
      />
      <mesh
        name='Object_22'
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_24'
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
      />
      <mesh
        name='Object_26'
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021EngineA_Material1}
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_28'
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004}
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_30'
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Carbon1_Material1}
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_32'
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha5A_Material1
        }
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_34'
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1
        }
        position={[0, 0.444, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_39'
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_41'
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_43'
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha6A_Material1
        }
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_45'
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha7A_Material1
        }
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_47'
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha8A_Material1
        }
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_49'
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_51'
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials.dark}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_53'
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_55'
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021LightA_Material1}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_57'
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021ManufacturerPlateA_Material1
        }
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_66'
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_68'
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.emit}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_70'
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1}
        position={[0, 0.446, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.822}
      />
      <mesh
        name='Object_72'
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={
          materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1
        }
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_74'
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.177, 0]}
      />
      <mesh
        name='Object_76'
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials.glass}
        position={[0, 0.172, 0]}
      />
      <mesh
        name='Object_78'
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials.wmit_red}
        position={[0, 0.172, 0]}
      />
      <mesh
        name='Object_80'
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1}
        position={[0, 0.172, 0]}
      />
      <mesh
        name='Object_82'
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_84'
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_86'
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021LightA_Material1}
        position={[0, 0.177, 0]}
      />
      <mesh
        name='Object_88'
        castShadow
        receiveShadow
        geometry={nodes.Object_88.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_90'
        castShadow
        receiveShadow
        geometry={nodes.Object_90.geometry}
        material={materials.dark}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_92'
        castShadow
        receiveShadow
        geometry={nodes.Object_92.geometry}
        material={materials['Material.002']}
        rotation={[2.558, 0, Math.PI]}
        scale={0.553}
      />
      <mesh
        name='Object_94'
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='Object_95'
        castShadow
        receiveShadow
        geometry={nodes.Object_95.geometry}
        material={materials['disk.001']}
      />
      <mesh
        name='Object_96'
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials.main}
      />
      <mesh
        name='Object_97'
        castShadow
        receiveShadow
        geometry={nodes.Object_97.geometry}
        material={materials.metalblack}
      />
      <mesh
        name='Object_98'
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials.sidetyre}
      />
      <mesh
        name='Object_100'
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name='Object_101'
        castShadow
        receiveShadow
        geometry={nodes.Object_101.geometry}
        material={materials['disk.001']}
      />
      <mesh
        name='Object_102'
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials.main}
      />
      <mesh
        name='Object_103'
        castShadow
        receiveShadow
        geometry={nodes.Object_103.geometry}
        material={materials.metalblack}
      />
      <mesh
        name='Object_104'
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials.sidetyre}
      />
      <mesh
        name='Object_106'
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_108'
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials.dark}
        position={[0, 0.424, 0]}
      />
      <mesh
        name='Object_110'
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials['Material.002']}
        position={[0, 0, -13.784]}
        rotation={[2.558, 0, Math.PI]}
        scale={0.553}
      />
      <mesh
        name='Object_112'
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload('/bmw_m4.glb')
