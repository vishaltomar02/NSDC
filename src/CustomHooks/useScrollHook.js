import {useState, useEffect, useRef} from 'react';

export default function useScrollHook({threshold, triggerOnce}) {

  const[inView, setInView] = useState(false);
  const[node, setNode] = useState(null);
  const[triggeredOnce, setTriggeredOnce] = useState(false);

  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if(entry.isIntersecting && !triggeredOnce && triggerOnce) setTriggeredOnce(true);
    }, { threshold })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();
    if(!node) return;
    if(!triggeredOnce) currentObserver.observe(node);

    return () => currentObserver.disconnect();

  }, [node, triggeredOnce]);

  return [setNode, inView];

}