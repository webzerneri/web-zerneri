import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import './Tienda.css'


function Sala() {

  // =========================================================
  // DIMENSIONES GENERALES
  // =========================================================

  const ancho = 30
  const largo = 60

  const altoPared = 10
  const altoCumbrera = 18

  const mitadAncho = ancho / 2
  const mitadLargo = largo / 2

  const diferenciaAltura =
    altoCumbrera - altoPared

  const pendiente = Math.atan(
    diferenciaAltura / mitadAncho
  )

  const largoAgua = Math.sqrt(
    Math.pow(mitadAncho, 2) +
    Math.pow(diferenciaAltura, 2)
  )


  // =========================================================
  // TEXTURAS
  // =========================================================

  const [
    paredTexture,
    pisoTexture,
    techoTexture,
    molduraTexture
  ] = useLoader(
    THREE.TextureLoader,
    [
      '/images/tienda/texturas/pared-estuco.jpg',
      '/images/tienda/texturas/piso-marmol.jpg',
      '/images/tienda/texturas/techo-vidrio.jpg',
      '/images/tienda/texturas/piedra-molduras.jpg'
    ]
  )


  // =========================================================
  // CONFIGURACIÓN DE TEXTURAS
  // =========================================================

  paredTexture.wrapS = THREE.RepeatWrapping
  paredTexture.wrapT = THREE.RepeatWrapping

  paredTexture.repeat.set(8, 4)


  pisoTexture.wrapS = THREE.RepeatWrapping
  pisoTexture.wrapT = THREE.RepeatWrapping

  pisoTexture.repeat.set(10, 20)


  techoTexture.wrapS = THREE.RepeatWrapping
  techoTexture.wrapT = THREE.RepeatWrapping

  techoTexture.repeat.set(8, 16)


  molduraTexture.wrapS = THREE.RepeatWrapping
  molduraTexture.wrapT = THREE.RepeatWrapping

  molduraTexture.repeat.set(2, 8)


  // =========================================================
  // MATERIALES
  // =========================================================

  const paredMaterial = {
    map: paredTexture,
    color: '#ffffff',
    roughness: 0.72,
    metalness: 0
  }


  const pisoMaterial = {
    map: pisoTexture,
    color: '#ffffff',
    roughness: 0.42,
    metalness: 0.02
  }


  const techoMaterial = {
    map: techoTexture,
    color: '#ffffff',
    roughness: 0.22,
    metalness: 0.08,
    transparent: true,
    opacity: 0.72,
    side: THREE.DoubleSide
  }


  const molduraMaterial = {
    map: molduraTexture,
    color: '#ffffff',
    roughness: 0.58,
    metalness: 0.05
  }


  // =========================================================
  // TRIÁNGULO SUPERIOR
  // =========================================================

  const gable = new THREE.Shape()

  gable.moveTo(
    -mitadAncho,
    altoPared
  )

  gable.lineTo(
    0,
    altoCumbrera
  )

  gable.lineTo(
    mitadAncho,
    altoPared
  )

  gable.closePath()


  return (
    <>

      {/* =====================================================
          PISO
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >

        <planeGeometry
          args={[ancho, largo]}
        />

        <meshStandardMaterial
          {...pisoMaterial}
        />

      </mesh>


      {/* =====================================================
          PARED IZQUIERDA
      ===================================================== */}

      <mesh
        position={[
          -mitadAncho,
          altoPared / 2,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.30,
            altoPared,
            largo
          ]}
        />

        <meshStandardMaterial
          {...paredMaterial}
        />

      </mesh>


      {/* =====================================================
          PARED DERECHA
      ===================================================== */}

      <mesh
        position={[
          mitadAncho,
          altoPared / 2,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.30,
            altoPared,
            largo
          ]}
        />

        <meshStandardMaterial
          {...paredMaterial}
        />

      </mesh>


      {/* =====================================================
          PARED DEL FONDO — RECTÁNGULO
      ===================================================== */}

      <mesh
        position={[
          0,
          altoPared / 2,
          -mitadLargo
        ]}
      >

        <boxGeometry
          args={[
            ancho,
            altoPared,
            0.30
          ]}
        />

        <meshStandardMaterial
          {...paredMaterial}
        />

      </mesh>


      {/* =====================================================
          PARED DEL FONDO — TRIÁNGULO
      ===================================================== */}

      <mesh
        position={[
          0,
          0,
          -mitadLargo - 0.16
        ]}
      >

        <shapeGeometry
          args={[gable]}
        />

        <meshStandardMaterial
          {...paredMaterial}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* =====================================================
          CUARTA PARED
      ===================================================== */}

      <mesh
        position={[
          0,
          altoPared / 2,
          mitadLargo
        ]}
      >

        <boxGeometry
          args={[
            ancho,
            altoPared,
            0.30
          ]}
        />

        <meshStandardMaterial
          {...paredMaterial}
        />

      </mesh>


      {/* =====================================================
          TRIÁNGULO DE LA CUARTA PARED
      ===================================================== */}

      <mesh
        position={[
          0,
          0,
          mitadLargo + 0.16
        ]}
        rotation={[
          0,
          Math.PI,
          0
        ]}
      >

        <shapeGeometry
          args={[gable]}
        />

        <meshStandardMaterial
          {...paredMaterial}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* =====================================================
          TECHO — AGUA IZQUIERDA
      ===================================================== */}

      <mesh
        position={[
          -mitadAncho / 2,
          (altoPared + altoCumbrera) / 2,
          0
        ]}
        rotation={[
          0,
          0,
          pendiente
        ]}
      >

        <boxGeometry
          args={[
            largoAgua + 0.20,
            0.16,
            largo + 0.30
          ]}
        />

        <meshStandardMaterial
          {...techoMaterial}
        />

      </mesh>


      {/* =====================================================
          TECHO — AGUA DERECHA
      ===================================================== */}

      <mesh
        position={[
          mitadAncho / 2,
          (altoPared + altoCumbrera) / 2,
          0
        ]}
        rotation={[
          0,
          0,
          -pendiente
        ]}
      >

        <boxGeometry
          args={[
            largoAgua + 0.20,
            0.16,
            largo + 0.30
          ]}
        />

        <meshStandardMaterial
          {...techoMaterial}
        />

      </mesh>


      {/* =====================================================
          CUMBRERA ÚNICA
      ===================================================== */}

      <mesh
        position={[
          0,
          altoCumbrera,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.20,
            0.20,
            largo + 0.40
          ]}
        />

        <meshStandardMaterial
          color="#303438"
          metalness={0.65}
          roughness={0.26}
        />

      </mesh>


      {/* =====================================================
          BORDE SUPERIOR IZQUIERDO
      ===================================================== */}

      <mesh
        position={[
          -mitadAncho / 2,
          (altoPared + altoCumbrera) / 2,
          0
        ]}
        rotation={[
          0,
          0,
          pendiente
        ]}
      >

        <boxGeometry
          args={[
            largoAgua + 0.25,
            0.10,
            largo + 0.25
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* =====================================================
          BORDE SUPERIOR DERECHO
      ===================================================== */}

      <mesh
        position={[
          mitadAncho / 2,
          (altoPared + altoCumbrera) / 2,
          0
        ]}
        rotation={[
          0,
          0,
          -pendiente
        ]}
      >

        <boxGeometry
          args={[
            largoAgua + 0.25,
            0.10,
            largo + 0.25
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* =====================================================
          MOLDURA LATERAL IZQUIERDA
      ===================================================== */}

      <mesh
        position={[
          -mitadAncho + 0.12,
          9.9,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.18,
            0.30,
            largo
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* =====================================================
          MOLDURA LATERAL DERECHA
      ===================================================== */}

      <mesh
        position={[
          mitadAncho - 0.12,
          9.9,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.18,
            0.30,
            largo
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* =====================================================
          ARCO DEL FONDO
      ===================================================== */}

      {/* Nicho */}

      <mesh
        position={[
          0,
          4.5,
          -mitadLargo + 0.18
        ]}
      >

        <planeGeometry
          args={[4.8, 9]}
        />

        <meshStandardMaterial
          color="#4b3527"
          roughness={0.72}
        />

      </mesh>


      {/* Pilar izquierdo */}

      <mesh
        position={[
          -2.55,
          3.0,
          -mitadLargo + 0.40
        ]}
      >

        <boxGeometry
          args={[
            0.62,
            6,
            0.62
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* Pilar derecho */}

      <mesh
        position={[
          2.55,
          3.0,
          -mitadLargo + 0.40
        ]}
      >

        <boxGeometry
          args={[
            0.62,
            6,
            0.62
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* Arco */}

      <mesh
        position={[
          0,
          5.85,
          -mitadLargo + 0.40
        ]}
      >

        <torusGeometry
          args={[
            2.55,
            0.24,
            32,
            96,
            Math.PI
          ]}
        />

        <meshStandardMaterial
          {...molduraMaterial}
        />

      </mesh>


      {/* =====================================================
          ILUMINACIÓN
      ===================================================== */}

      <ambientLight
        intensity={0.65}
      />


      <directionalLight
        position={[
          0,
          16,
          10
        ]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-left={-35}
        shadow-camera-right={35}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />


      {/* Luz izquierda */}

      <pointLight
        position={[
          -10,
          7,
          -10
        ]}
        intensity={7}
        distance={22}
        decay={2}
        color="#fff4df"
      />


      {/* Luz derecha */}

      <pointLight
        position={[
          10,
          7,
          -10
        ]}
        intensity={7}
        distance={22}
        decay={2}
        color="#fff4df"
      />


      {/* Luz cálida del arco */}

      <pointLight
        position={[
          0,
          5,
          -27
        ]}
        intensity={18}
        distance={12}
        decay={2}
        color="#ffb968"
      />


      {/* =====================================================
          CONTROLES
      ===================================================== */}

      <OrbitControls
        target={[
          0,
          4,
          -8
        ]}
        minDistance={4}
        maxDistance={28}
        minPolarAngle={0.35}
        maxPolarAngle={2.55}
        enableDamping
        dampingFactor={0.08}
      />

    </>
  )
}


function Tienda() {

  return (

    <main className="tienda-page">

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [
            0,
            3.2,
            9
          ],
          fov: 62,
          near: 0.1,
          far: 150
        }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance'
        }}
        onCreated={({ gl }) => {

          gl.outputColorSpace =
            THREE.SRGBColorSpace

          gl.toneMapping =
            THREE.ACESFilmicToneMapping

          gl.toneMappingExposure =
            1.12

        }}
      >

        <color
          attach="background"
          args={['#111214']}
        />

        <Environment
          preset="studio"
          environmentIntensity={0.42}
        />

        <Sala />

      </Canvas>

    </main>
  )
}


export default Tienda