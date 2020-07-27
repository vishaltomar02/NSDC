import React from 'react';
import useScrollHook  from '../CustomHooks/useScrollHook.js';

const JoinTeam = () => {

  const [ref, inView] = useScrollHook({threshold: 0, triggerOnce: false});

   return (
     <div ref={ref} className={`join-team ${inView ? 'fade-up' : ''}`}>
       <div className="join-team-inner">
         <div > Join The Care Team. Be A Part Of Karma.</div>
         <h2 style={{padding: '0.5em 0 2em 0', color: 'white', textAlign: 'center'}}>Let's do our bit for the voiceless.</h2>
         <div className="welcome-button" style={{textAlign: 'center'}}>
           <button>Join With Us</button>
         </div>
       </div>
     </div>
   );
}

export default JoinTeam;