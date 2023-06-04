import { useEffect, useState } from 'react'

function FollowMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      console.log('cleanup')
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (e) => {
      const { clientX, clientY } = e
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) { window.addEventListener('pointermove', handleMove) } else { setPosition({ x: 50, y: 50 }) }
    return () => {
      console.log('cleanupfirst')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <main>
        <div
          className='pokeball' id='master' style={{
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        />
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
      </main>
    </>
  )
}

export default FollowMouse