"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  ListFilter,
  MoreHorizontal,
  Package2,
  PlusCircle,
  Settings,
  Edit,
  Trash2,
  Upload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import EditorComponent from "@/components/EditorComponent";
import { saveBlog } from "@/app/actions";

export function AdminComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddNewClick = () => {
    setIsDialogOpen(true);
  };

  const [editorData, setEditorData] = React.useState<{ [key: string]: any }>(
    {}
  );

  const handleEditorChange = (id: number, data: any) => {
    setEditorData((prevData) => ({
      ...prevData,
      [id]: data,
    }));
  };

  const handleSave = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;
    const holderId = "editorjs1"; // Assuming we're always using this ID for now
    const content = editorData[holderId];

    await saveBlog(title, description, image, content);
  };

  return (
    <section className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="blogs">
            <div className="w-full bg-white flex items-center justify-between sticky top-0 py-3 z-10">
              <TabsList>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Published
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="h-8 gap-1"
                      onClick={handleAddNewClick}
                    >
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add New
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px]">
                    <DialogHeader>
                      <DialogTitle>Add New Blog Post</DialogTitle>
                      <DialogDescription>
                        Create a new blog post. Click save when you re done.
                      </DialogDescription>
                    </DialogHeader>
                    <form action={handleSave}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                              id="title"
                              name="title"
                              placeholder="Enter blog title"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input
                              id="description"
                              placeholder="Enter blog description"
                              name="description"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="image">Featured Image</Label>
                            <Select name="image">
                              <SelectTrigger>
                                <SelectValue placeholder="Select an image" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="image1">Image 1</SelectItem>
                                <SelectItem value="image2">Image 2</SelectItem>
                                <SelectItem value="image3">Image 3</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="content">Content</Label>
                          <div className="max-h-[20rem] overflow-hidden border p-2 rounded-lg">
                            <EditorComponent
                              holderId="editorjs1"
                              onChange={handleEditorChange}
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <TabsContent value="blogs">
              <Card>
                <CardHeader>
                  <CardTitle>Blogs</CardTitle>
                  <CardDescription>Manage your blog posts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Published Date</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Getting Started with Next.js
                        </TableCell>
                        <TableCell>
                          <Badge>Published</Badge>
                        </TableCell>
                        <TableCell>2024-03-15</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          React Hooks Explained
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Draft</Badge>
                        </TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          CSS Grid Layout Tutorial
                        </TableCell>
                        <TableCell>
                          <Badge>Published</Badge>
                        </TableCell>
                        <TableCell>2024-03-10</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-3</strong> of <strong>10</strong> blog
                    posts
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="images">
              <Card>
                <CardHeader>
                  <CardTitle>Image Gallery</CardTitle>
                  <CardDescription>
                    Manage your image uploads for blogs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    ].map((i) => (
                      <div key={i} className="relative aspect-auto">
                        <img
                          src={`/assets/photos/cover.webp`}
                          alt={`Image ${i}`}
                          width={"100%"}
                          className="rounded-lg object-cover"
                        />
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute bottom-2 right-2"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sticky bottom-0 bg-white p-5">
                    <Input id="image-upload" type="file" className="sr-only" />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                    >
                      <span className="flex items-center space-x-2">
                        <Upload className="w-6 h-6 text-gray-600" />
                        <span className="font-medium text-gray-600">
                          Drop files to Attach, or browse
                        </span>
                      </span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </section>
  );
}

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
