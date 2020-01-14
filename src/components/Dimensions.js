import {useState, useCallback} from 'react'
import useEventListener from '../hook/useEventListener'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export default function Dimensions() {
    const [size, setSize] = useState(getWindowDimensions)

    const handler = useCallback(() => {
        setSize(getWindowDimensions())
    }, [setSize])

    useEventListener('resize', handler)

    return size
}
