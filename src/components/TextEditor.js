import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
export default function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const id = "hamdy";
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder={`Tell us a  story ${id}`}
      />
    </div>
  );
}
