"use client";

import React from "react";

// Editor.js
import EditorJS from "@editorjs/editorjs";
import "./Editor.scss";
import axios from "axios";

const EditorComponent = ({
  holderId,
  onChange,
}: {
  holderId: string;
  onChange: any;
}) => {
  // Editor.js config
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const ref = React.useRef<EditorJS>();

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Header = (await import("@editorjs/header")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    // @ts-ignore
    const Raw = (await import("@editorjs/raw")).default;
    // @ts-ignore
    const Code = (await import("@editorjs/code")).default;
    // @ts-ignore
    const Image = (await import("@editorjs/image")).default;
    // @ts-ignore
    const InlineCode = (await import("@editorjs/inline-code")).default;

    if (ref.current && ref.current instanceof EditorJS) {
      ref.current.destroy();
    }

    const editor = new EditorJS({
      holder: `${holderId}`,
      tools: {
        headers: Header,
        list: List,
        raw: Raw,
        code: Code,
        inlineCode: InlineCode,
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile(file: File) {
                let formData = new FormData();
                formData.append("file", file);

                return axios
                  .post("/api/upload", formData)
                  .then((res) => {
                    if (res.data.success) {
                      return {
                        success: 1,
                        file: {
                          url: res.data.result,
                        },
                      };
                    } else {
                      return {
                        success: 0,
                      };
                    }
                  })
                  .catch((error) => {
                    console.error("Upload failed:", error);
                    return {
                      success: 0,
                    };
                  });
              },
            },
          },
        },
      },
      data: {
        blocks: [
          {
            id: "p4l5AsgWX-",
            type: "paragraph",
            data: {
              text: "Escribe una descripción.",
            },
          },
        ],
      },
      //   onChange: async () => {
      //     const outputData = await editor.save();
      //     setEditorData(outputData);
      //   },

      onChange: async () => {
        const outputData = await editor.save();
        onChange(holderId, outputData);
      },
    });

    ref.current = editor;
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();
      return () => {
        if (ref.current && ref.current instanceof EditorJS) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  return <div id={holderId}></div>;
};

export default EditorComponent;
