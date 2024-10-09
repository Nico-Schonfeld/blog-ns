"use client";

import React from "react";
import Link from "next/link";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

const AppComponent = () => {
  const blogsExamples = [
    {
      id: 1,
      img: "/assets/photos/cover.webp",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ducimus.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perferendis? Vel modi, iste ad aperiam asperiores cum, pariatur minima, natus voluptate esse earum consectetur consequatur voluptas corrupti eveniet animi officia veritatis quae quos. Nulla tempore, voluptate sunt porro, ea vero molestiae doloremque expedita eos omnis quaerat asperiores nemo qui velit.",
      createdAt: "09/10/2024",
    },
    {
      id: 2,
      img: "/assets/photos/cover.webp",
      title: "Preview Mode for Static Generation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
      createdAt: "09/10/2024",
    },
    {
      id: 3,

      img: "/assets/photos/demo-next-white.png",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ducimus.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perferendis? Vel modi, iste ad aperiam asperiores cum, pariatur minima, natus voluptate esse earum consectetur consequatur voluptas corrupti eveniet animi officia veritatis quae quos. Nulla tempore, voluptate sunt porro, ea vero molestiae doloremque expedita eos omnis quaerat asperiores nemo qui velit.",
      createdAt: "09/10/2024",
    },
    {
      id: 4,
      img: "/assets/photos/cover.webp",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ducimus.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perferendis? Vel modi, iste ad aperiam asperiores cum, pariatur minima, natus voluptate esse earum consectetur consequatur voluptas corrupti eveniet animi officia veritatis quae quos. Nulla tempore, voluptate sunt porro, ea vero molestiae doloremque expedita eos omnis quaerat asperiores nemo qui velit.",
      createdAt: "09/10/2024",
    },
    {
      id: 5,
      img: "/assets/photos/demo-next-white.png",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ducimus.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perferendis? Vel modi, iste ad aperiam asperiores cum, pariatur minima, natus voluptate esse earum consectetur consequatur voluptas corrupti eveniet animi officia veritatis quae quos. Nulla tempore, voluptate sunt porro, ea vero molestiae doloremque expedita eos omnis quaerat asperiores nemo qui velit.",
      createdAt: "09/10/2024",
    },
  ];

  return (
    <AnimatePresence>
      <main className="w-full min-h-screen">
        <div className="w-full h-full container mx-auto py-20 flex items-center justify-center flex-col gap-20">
          {/* Section titles and info */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <h1>Blog</h1>
            <p>
              A statically generated blog example using Next.js and Markdown.
            </p>
          </motion.section>

          {/* Section Blog init */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            exit={{ opacity: 0, y: -50 }}
            className="w-full h-auto"
          >
            <Link href={"#"}>
              <img
                src="/assets/photos/cover.webp"
                alt="test img"
                width="100%"
                className="object-cover rounded-lg"
              />
            </Link>

            <div className="flex flex-col gap-5 w-full py-10">
              <Link
                href={"#"}
                className="w-full text-3xl lg:text-5xl font-bold text-balance hover:underline"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur, ducimus.
              </Link>

              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, perferendis? Vel modi, iste ad aperiam asperiores
                cum, pariatur minima, natus voluptate esse earum consectetur
                consequatur voluptas corrupti eveniet animi officia veritatis
                quae quos. Nulla tempore, voluptate sunt porro, ea vero
                molestiae doloremque expedita eos omnis quaerat asperiores nemo
                qui velit.
              </p>
              <span className="text-sm w-full h-auto flex items-center justify-start">
                {moment().format("DD/MM/YYYY")}
              </span>
            </div>
          </motion.section>

          {/* Section list blogs */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, y: -50 }}
            className="w-full h-auto "
          >
            <div className="w-full flex items-center justify-between gap-10 py-10">
              <h2 className="text-6xl font-black">More Stories</h2>

              <Input
                type="text"
                placeholder="Buscar blog..."
                className="w-[20rem]"
              />
            </div>
            <ul className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              {blogsExamples?.slice(0, 6).map((blog, index) => (
                <li key={blog.id}>
                  <Link href={"#"}>
                    <img
                      src={blog.img}
                      alt={blog.title}
                      width="100%"
                      className="object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex flex-col gap-5 w-full py-10">
                    <Link
                      href={"#"}
                      className="w-full text-xl lg:text-3xl font-bold text-balance hover:underline"
                    >
                      {blog.title}
                    </Link>

                    <span className="text-sm w-full h-auto flex items-center justify-start">
                      {blog.createdAt}
                    </span>

                    <p className="text-sm lg:text-md">
                      {blog.description.slice(0, 200)}...
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </main>
    </AnimatePresence>
  );
};

export default AppComponent;

/* "use client";

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
 */
