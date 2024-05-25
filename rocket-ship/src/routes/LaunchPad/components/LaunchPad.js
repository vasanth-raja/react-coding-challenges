import { useEffect, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  // const [, triggerRerender] = useState(Date.now());
  
  useEffect(() => {
    // setInterval(() => { triggerRerender(Date.now()); }, 500);
  }, [])
   console.log("rerendered")                       
  
  return (
    <div className="launchpad">
      <FunctionalRocket />
    </div>
  );
}
