"use client";

import React from "react";
import dynamic from "next/dynamic";

const EditorComponent = dynamic(() => import("@/components/EditorComponent"), {
  ssr: false,
});
import { Button } from "@/components/ui/button";
import { saveBlog } from "../actions";

const AppComponent = () => {
  const [editorData, setEditorData] = React.useState<{ [key: string]: any }>(
    {}
  );

  const handleEditorChange = (id: number, data: any) => {
    setEditorData((prevData) => ({
      ...prevData,
      [id]: data,
    }));
  };

  const handleSave = async () => {
    for (const [holderId, content] of Object.entries(editorData)) {
      await saveBlog(holderId, content);
    }
  };

  return (
    <div>
      <EditorComponent holderId="editorjs1" onChange={handleEditorChange} />
      <EditorComponent holderId="editorjs2" onChange={handleEditorChange} />

      <Button onClick={handleSave}>Guardar Blogs</Button>
    </div>
  );
};

export default AppComponent;
