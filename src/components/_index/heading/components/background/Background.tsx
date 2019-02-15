import React from 'react';
import * as THREE from 'three';

import s from './Background.module.scss';

const vertexShader = `
  attribute float scale;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = scale * ( 300.0 / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;
  void main() {
    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
    gl_FragColor = vec4( color, 1.0 );
  }
`;

interface BackgroundProps {
  fill: string;
}

class Background extends React.Component<BackgroundProps> {
  mount: HTMLElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  particles: THREE.Points | any;
  frameId: number;

  width: number;
  height: number;
  separation = 60;
  amountX = 60;
  amountY = 30;
  positionX = 450;
  positionY = 450;
  positionZ = 700;
  count = 0;

  componentDidMount () {
    this.buildCamera();
    this.buildScene();
    this.buildRenderer();
    this.start();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUnmount () {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.onWindowResize);
  }

  buildCamera = () => {
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 1, 1400);
    this.camera.position.z = this.positionZ;
    this.camera.position.x = this.positionX;
    this.camera.position.y = this.positionY;
  }

  buildRenderer = () => {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(this.props.fill);
    this.renderer.setSize(this.width, this.height);
    this.mount.appendChild(this.renderer.domElement);
  }

  buildScene = () => {
    this.scene = new THREE.Scene();

    const numParticles = this.amountX * this.amountY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0;
    let j = 0;
    for (let ix = 0; ix < this.amountX; ix += 1) {
      for (let iy = 0; iy < this.amountY; iy += 1) {
        positions[i] = ix * this.separation - (this.amountX * this.separation) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * this.separation - (this.amountY * this.separation) / 2; // z
        scales[j] = 1;
        i += 3;
        j += 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.addAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      fragmentShader: this.shaderParse(fragmentShader),
      uniforms: { color: { value: new THREE.Color(0xcfd0d4) } },
      vertexShader: this.shaderParse(vertexShader),
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  onWindowResize = () => {
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  replaceThreeChunk = (a: string, b: string) => {
    return `${THREE.ShaderChunk[b]}
`;
  };

  shaderParse = (glsl: string) => {
    return glsl.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g, this.replaceThreeChunk);
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.camera.lookAt(this.scene.position);

    const positions = this.particles.geometry.attributes.position.array;
    const scales = this.particles.geometry.attributes.scale.array;
    let i = 0;
    let j = 0;
    for (let ix = 0; ix < this.amountX; ix += 1) {
      for (let iy = 0; iy < this.amountY; iy += 1) {
        positions[i + 1] =
          Math.sin((ix + this.count) * 0.3) * 50 +
          Math.sin((iy + this.count) * 0.5) * 50;
        scales[j] =
          (Math.sin((ix + this.count) * 0.3) + 1) * 6 +
          (Math.sin((iy + this.count) * 0.5) + 1) * 6;
        i += 3;
        j += 1;
      }
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.scale.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);

    this.count += 0.1;
  };

  render () {
    return (
      <div
        data-aos="fade"
        className={s.container}
        ref={mount => this.mount = mount}
      />
    );
  }
}

export default Background;
