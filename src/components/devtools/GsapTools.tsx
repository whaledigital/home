import React from 'react';

import s from './GsapTools.module.scss';

interface GsapToolsProps {
  button: boolean;
}

const GsapDevTools = require('gsap-tools').default;
const LOCAL_STORAGE_GSAPTOOLS = '_uenoDevtoolsGsapTools';

export const GsapTools = ({ button }: GsapToolsProps) => {
  const [visible, setVisible] = React.useState(false);

  const onToggleGsapTools = () => {
    setVisible(!visible);
    localStorage.setItem(LOCAL_STORAGE_GSAPTOOLS, String(!visible));
  };

  React.useEffect(
    () => {
      if (localStorage.getItem(LOCAL_STORAGE_GSAPTOOLS) === 'true') {
        setVisible(true);
      }
    },
    [],
  );

  return (
    <>
      {button && (
        <button
          className={s(s.button, { visible })}
          onClick={onToggleGsapTools}
        >
          GSAP
        </button>
      )}

      <GsapDevTools onClick={onToggleGsapTools} isVisible={visible} isFixed />
    </>
  );
};
