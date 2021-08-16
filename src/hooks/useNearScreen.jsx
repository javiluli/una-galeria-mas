import { useEffect, useState, useRef } from 'react'

function useNearScreen({ distancia = '300px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(function () {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const element = entries[0]

      if (element.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    // provee al navegador de un intersection-observer en caso de no soportalo
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distancia,
      })

      if (element) observer.observe(element)
    })

    // retornamos el metodo descontado para limpiar el evento
    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}

export default useNearScreen
