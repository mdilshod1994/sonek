<script setup>
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { distance, map, radians } from "@/vendor/helpers"

const experience = ref(null)
const loader = new GLTFLoader()
class App {
  setup() {
    this.gutter = { size: 4 }
    this.meshes = []
    this.grid = { rows: 5, cols: 12 }
    this.width = window.innerWidth
    this.height = experience.value.offsetHeight
    this.mouse3D = new THREE.Vector2()
    this.raycaster = new THREE.Raycaster()
  }
  createScene() {
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(window.innerWidth, experience.value.offsetHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    nextTick(() => {
      experience.value.appendChild(this.renderer.domElement)
    })
  }
  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      37,
      window.innerWidth / experience.value.offsetHeight,
      1,
    )
    this.camera.position.set(0, 65, 0)
    this.camera.rotation.x = -1.57
    this.scene.add(this.camera)
  }
  addAmbientLight() {
    const light = new THREE.AmbientLight("#ffffff", 5)
    this.scene.add(light)
  }
  addDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3) // Lowered intensity
    directionalLight.position.set(50, 100, 50)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = experience.value.offsetWidth
    directionalLight.shadow.mapSize.height = experience.value.offsetHeight

    this.scene.add(directionalLight)
  }
  addFloor() {
    const geometry = new THREE.PlaneGeometry(100, 100)
    const material = new THREE.ShadowMaterial({ opacity: 0.3 })
    this.floor = new THREE.Mesh(geometry, material)
    this.floor.position.y = 0
    this.floor.receiveShadow = true
    this.floor.rotateX(-Math.PI / 2)
    this.scene.add(this.floor)
  }
  getRandomGeometry() {
    return this.geometries[Math.floor(Math.random() * Math.floor(this.geometries.length))]
  }
  createGrid() {
    this.groupMesh = new THREE.Object3D()
    loader.load("/coin.glb", (gltf) => {
      const model = gltf.scene
      for (let row = 0; row < this.grid.rows; row++) {
        this.meshes[row] = []
        for (let col = 0; col < this.grid.cols; col++) {
          const mesh = model.clone()
          mesh.position.set(col + col * this.gutter.size, 0, row + row * this.gutter.size)
          mesh.rotation.x = -Math.PI / 2
          mesh.rotation.y = 0
          mesh.rotation.z = 0
          mesh.initialRotation = {
            x: mesh.rotation.x,
            y: mesh.rotation.y,
            z: mesh.rotation.z,
          }
          this.groupMesh.add(mesh)
          this.meshes[row][col] = mesh
        }
      }
      const centerX = (this.grid.cols - 1 + (this.grid.cols - 1) * this.gutter.size) * 0.5
      const centerZ = (this.grid.rows - 1 + (this.grid.rows - 1) * this.gutter.size) * 0.5
      this.groupMesh.position.set(-centerX, 0, -centerZ)
      this.scene.add(this.groupMesh)
    })
  }
  getTotalRows(col) {
    return col % 2 === 0 ? this.grid.cols : this.grid.cols - 1
  }
  getMesh(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.castShadow = true
    mesh.receiveShadow = true
    return mesh
  }
  draw() {
    this.raycaster.setFromCamera(this.mouse3D, this.camera)
    const intersects = this.raycaster.intersectObjects([this.floor])
    if (intersects.length) {
      const { x, z } = intersects[0].point
      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {
          const mesh = this.meshes[row][col]
          const mouseDistance = distance(
            x,
            z,
            mesh.position.x + this.groupMesh.position.x,
            mesh.position.z + this.groupMesh.position.z,
          )
          const y = map(mouseDistance, 6, 0, 0, 10)
          TweenMax.to(mesh.position, 0.2, { y: y < 1 ? 1 : y })
          const scaleFactor = mesh.position.y / 5
          const scale = scaleFactor < 1 ? 1 : scaleFactor
          TweenMax.to(mesh.scale, 5, {
            ease: Expo.easeOut,
            x: scale,
            y: scale,
            z: scale,
          })
          TweenMax.to(mesh.rotation, 3, {
            ease: Expo.easeOut,
            x: map(mesh.position.y, -1, 1, radians(45), mesh.initialRotation.x),
            z: map(mesh.position.y, -1, 1, radians(-90), mesh.initialRotation.z),
            y: map(mesh.position.y, -1, 1, radians(90), mesh.initialRotation.y),
          })
        }
      }
    }
  }
  init() {
    this.setup()
    this.createScene()
    this.createCamera()
    this.createGrid()
    this.addFloor()
    this.addAmbientLight()
    this.addDirectionalLight()
    this.animate()
    window.addEventListener("resize", this.onResize.bind(this))
    window.addEventListener("mousemove", this.onMouseMove.bind(this), false)
    window.addEventListener("touchmove", this.onTouchMove.bind(this), false)
    this.onMouseMove({ clientX: 0, clientY: 0 })
  }
  onMouseMove({ clientX, clientY }) {
    this.mouse3D.x = (clientX / this.width) * 2 - 1
    this.mouse3D.y = -(clientY / this.height) * 2 + 1
  }
  onTouchMove(e) {
    this.mouse3D.x = (e.touches[0].clientX / this.width) * 2 - 1
    this.mouse3D.y = -(e.touches[0].clientY / this.height) * 2 + 1
  }
  onResize() {
    this.width = window.innerWidth
    this.height = experience.value.offsetHeight
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }
  animate() {
    setTimeout(() => {
      this.draw()
    }, 1000)
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
  }
}
onMounted(() => {
  const app = new App()
  app.init()
})
</script>

<template>
  <div ref="experience" cls="wrap">
    <p>Mr. Sonek</p>
  </div>
</template>

<style lang="scss" module>
.wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    font-size: clamp(4.93rem, 3.247rem + 7.18vw, 11.868rem);
    font-style: normal;
    font-weight: 500;
    letter-spacing: -10.318px;
    line-height: 105%;
    position: absolute;
    white-space: nowrap;
  }
  canvas {
    position: relative;
    z-index: 1;
  }
}
</style>
