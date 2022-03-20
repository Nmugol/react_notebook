import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Note = props => {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    let darcMode = props.theme;


    return (
        <div className={(darcMode ? 'dark-mode' : 'light-mode') + ' noteCard' + ' editNode'}>
            <div>
                <input type="text" className={(darcMode ? 'dark-mode' : 'light-mode') + ' inputNode'} placeholder="Title" />
            </div>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: ' formatselect ' +
                        'bold italic backcolor alignleft aligncenter ' +
                        'alignright alignjustify bullist numlist outdent indent',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px}'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </div>
    );
}

export default Note;