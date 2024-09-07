import React from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor" style={{ height: 500 }}>
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Enter Text"}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;