import { useLayoutEffect, useState } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({ height: 0, width: 0 })

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ height: window.innerHeight, width: window.innerWidth })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}
