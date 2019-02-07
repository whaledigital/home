import React from 'react';

import s from './Box3D.module.scss';

interface Box3DProps {
  perspective?: number;
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
}

interface Box3DState {
  transform: string;
}

class Box3D extends React.Component<Box3DProps, Box3DState> {
  static defaultProps = {
    height: 200,
    perspective: 40,
    width: 200,
  };

  state = {
    transform: 'initial',
  };

  containerRef: HTMLElement;
  innerRef: HTMLElement;

  counter = 0;
  updateRate = 10;

  mouseX = 0;
  mouseY = 0;
  mouseOriginX = 0;
  mouseOriginY = 0;

  onMouseEnterHandler = (event: React.MouseEvent<HTMLElement>) => {
    this.setMouseOrigin(this.containerRef);
    this.update(event);
  }

  onMouseLeaveHandler = () => this.setState({ transform: 'initial' });

  onMouseMoveHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (this.isTimeToUpdate()) this.update(event);
  };

  isTimeToUpdate = () => (this.counter += 1) % this.updateRate === 0;

  setMouseOrigin = (e: HTMLElement) => {
    const client = e.getBoundingClientRect();
    this.mouseOriginX = client.left + Math.floor(client.width / 2);
    this.mouseOriginY = client.top + Math.floor(client.height / 2);
  }

  update = (event: React.MouseEvent<HTMLElement>) => {
    this.updateMousePosition(event);
    const client = this.innerRef.getBoundingClientRect();
    this.updateTransform(
      (this.mouseY / client.height / 2).toFixed(2),
      (this.mouseX / client.width / 2).toFixed(2),
    );
  };

  updateTransform = (x: string, y: string) => {
    this.setState({ transform: `rotateX(${x}deg) rotateY(${y}deg)` });
  };

  updateMousePosition = (event: React.MouseEvent<HTMLElement>) => {
    this.mouseX = event.clientX - this.mouseOriginX;
    this.mouseY = (event.clientY - this.mouseOriginY) * -1;
  }

  render () {
    const {
      perspective,
      width,
      height,
      children,
    } = this.props;
    const {
      transform,
    } = this.state;
    return (
      <div
        ref={ref => this.containerRef = ref}
        className={s.box}
        style={{ perspective, width, height }}
      >
        <div
          ref={ref => this.innerRef = ref}
          className={s.box__inner}
          style={{ width, height, transform }}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          onMouseMove={this.onMouseMoveHandler}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Box3D;
