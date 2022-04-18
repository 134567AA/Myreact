// import React , { useState } from 'react';
// import {Editor} from 'react-draft-wysiwyg';
// import { Editor } from 'draft-js';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import { EditorState } from 'draft-js';
import '../singleform/singleForm.css'



// export default function SingleForm(){
//     const [ editorState, setEditorState ] = useState(()=>
//     EditorState.createEmpty()
//     );
//     useEffect
// }

export default function SingleForm(){
    return(
        <div classname="sform">
            <form className="writeForm">
                <div className='writeFormGroup'>
                <input type="text" className="writeInput" placeholder="제목을 입력하세요." autoFocus={true} />
                </div>
            
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" cols="35" row="10" placeholder="내용을 입력하세요." autoFocus={true}></textarea>
                 </div>
                 <lable htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </lable>   
                <input type="file" id="fileInput"/>
                 <div className='btn-box'>
                 <button className="writeSubmit">글 올리기</button>
                 </div>
            </form>
        </div>
    )
}