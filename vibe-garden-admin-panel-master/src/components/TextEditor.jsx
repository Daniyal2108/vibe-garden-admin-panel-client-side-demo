import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import the styles
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const TextEditor = ({ getEditorState }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    getEditorState(newEditorState);
  };
  //   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  //   console.log(
  //     "value",
  //     convertToRaw(editorState.getCurrentContent()).blocks[0].text
  //   );
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName absolute w-[90%]"
      wrapperClassName="wrapperClassName relative"
      editorClassName="rounded-md bg-[#E5ECE7] w-[90%] min-h-[150px] focus:outline-none px-2 py-8"
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        options: [
          "inline",
          "fontSize",
          "fontFamily",
          //   "list",
          //  "textAlign",
          "colorPicker",
          "emoji",
          "remove",
          "history",
        ],
      }}
    />
  );
};

export default TextEditor;
