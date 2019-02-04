import React, { CSSProperties } from 'react';

import s from './GridOverlay.module.scss';

const LOCAL_STORAGE_KEY_HORIZONTAL = '_devtoolsHorizontalGrid';
const LOCAL_STORAGE_KEY_VERTICAL = '_devtoolsVerticalGrid';

interface GridOverlayProps {
  columns: number;
  baseline: number;
  button: boolean;
}

export const GridOverlay = ({
  columns,
  baseline,
  button,
}: GridOverlayProps) => {
  const gridOverlayRef = React.useRef<HTMLDivElement>(null);
  const [isHorizontalVisible, setHorizontal] = React.useState<boolean>(
    localStorage.getItem(LOCAL_STORAGE_KEY_HORIZONTAL) === 'true',
  );
  const [isVerticalVisible, setVertical] = React.useState<boolean>(
    localStorage.getItem(LOCAL_STORAGE_KEY_VERTICAL) === 'true',
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.keyCode === 76) {
      onToggleVertical();
    }

    if (e.ctrlKey && e.keyCode === 77) {
      onToggleHorizontal();
    }
  };

  const onToggleHorizontal = () => {
    setHorizontal(!isHorizontalVisible);
    localStorage.setItem(
      LOCAL_STORAGE_KEY_HORIZONTAL,
      String(!isHorizontalVisible),
    );
  };

  const onToggleVertical = () => {
    setVertical(!isVerticalVisible);
    localStorage.setItem(
      LOCAL_STORAGE_KEY_VERTICAL,
      String(!isVerticalVisible),
    );
  };

  React.useEffect(() => {
    if (gridOverlayRef.current) {
      gridOverlayRef.current.style.setProperty(
        '--grid-column-count',
        String(columns),
      );
      gridOverlayRef.current.style.setProperty(
        '--grid-baseline',
        `${baseline}px`,
      );
      gridOverlayRef.current.style.setProperty(
        '--grid-baseline-calc',
        String(baseline),
      );
    }

    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  return (
    <div
      ref={gridOverlayRef}
      className={[s.grid, isHorizontalVisible ? s.gridIsHorizontalIsVisible : ''].join(' ')}
      style={{ isVerticalVisible } as CSSProperties}
    >
      <div className={s.grid__container}>
        <div className={s.grid__row} data-columns={columns}>
          {Array(columns)
            .fill(0)
            .map((_, i) => (
              <div key={`grid_column_${i}`} className={s.grid__column}>
                <div className={s.grid__visualize} />
              </div>
            ))}
        </div>
      </div>
      {button ? (
        <>
          <button
            className={s.grid__button}
            style={{ vertical: isVerticalVisible } as CSSProperties}
            onClick={onToggleVertical}
          >
            <svg
              className={s.grid__button__svg}
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>
          <button
            className={s.grid__button}
            style={{ horizontal: isHorizontalVisible } as CSSProperties}
            onClick={onToggleHorizontal}
          >
            <svg
              className={s.grid__button__svg}
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
            >
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                // tslint:disable:max-line-length
                transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000)"
              >
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
};

GridOverlay.defaultProps = {
  baseline: 16,
  button: false,
  columns: 12,
};
