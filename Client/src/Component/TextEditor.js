import "quill/dist/quill.snow.css"
import Quill from "quill"
import { useEffect, useRef } from "react"


export default function TextEditor() {

    const wrapperRef = useRef()


    useEffect(() => {
        const editor = document.createElement('div')
        wrapperRef.current.append(editor)
        new Quill(editor, { theme: "snow" })
    }, [])

    return (
        <div className='editor' ref={wrapperRef}></div>
    )
}
