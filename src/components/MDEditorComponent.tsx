"use client";

import { FC, useEffect, useState } from "react";
import type MDEditorType from "@uiw/react-md-editor";

interface MDEditorProps {
  value: string;
  onChange: (value?: string) => void;
}

const MDEditorComponent: FC<MDEditorProps> = ({ value, onChange }) => {
  const [MDEditor, setMDEditor] = useState<typeof MDEditorType | null>(null);

  useEffect(() => {
    import("@uiw/react-md-editor").then((mod) => {
      setMDEditor(() => mod.default);
    });
  }, []);

  if (!MDEditor) {
    return (
      <div className="w-full h-[400px] border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="space-y-20">
      <div data-color-mode="light" className="prose max-w-none">
        <MDEditor
          value={value}
          onChange={onChange}
          preview="live"
          height={400}
          className="w-full"
          textareaProps={{
            placeholder: "Write your article content here...",
          }}
        />
      </div>
    </div>
  );
};

export default MDEditorComponent;
