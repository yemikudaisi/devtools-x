import { Tooltip, Button, Flex, Checkbox } from "@chakra-ui/react";
import Editor, { DiffEditor, type OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";

const def = {
  array: [1, 2, 3],
  boolean: true,
  color: "gold",
  null: null,
  number: 123,
  object: {
    a: "b",
    c: "d",
  },
  string: "Hello World",
};

export const JsonFormatter = () => {
  const editorRef = useRef<any>(null);
  const [diff, setDiff] = useState(false);

  const onMount: OnMount = (editor, monaco) => {
    console.log("Mounted", monaco);
    // minify command
    editor.addAction({
      id: "minify-json",
      label: "Minify json",
      //FIXME: keybindings not working
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyM],
      // A precondition for this action.
      precondition: null,

      // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
      keybindingContext: null,

      contextMenuGroupId: "navigation",

      contextMenuOrder: 1.5,
      run: function (ed: any) {
        ed.setValue(JSON.stringify(def));
      },
    });

    // ref
    editorRef.current = editor;
  };

  return (
    <Flex w="full" gap={3} alignSelf={"start"}>
      {diff ? (
        <DiffEditor
          options={{
            minimap: { enabled: false },
            originalEditable: true,
          }}
          theme="vs-dark"
          height={"93vh"}
          width={"100%"}
          originalLanguage="json"
          modifiedLanguage="json"
          original={JSON.stringify(def, null, 2)}
          modified={JSON.stringify(def, null, 2)}
          onMount={onMount}
        />
      ) : (
        <Editor
          //refer: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorMinimapOptions.html
          options={{
            minimap: { enabled: false },
          }}
          defaultLanguage="json"
          theme="vs-dark"
          height={"93vh"}
          width={"100%"}
          defaultValue={JSON.stringify(def, null, 2)}
          onMount={onMount}
        />
      )}

      <Flex gap={5} flexDirection={"column"}>
        <Tooltip label="Alt+Shift+F" openDelay={500}>
          <Button
            size={"sm"}
            onClick={() => {
              editorRef.current?.setValue(JSON.stringify(def, null, 2));
            }}
          >
            Format
          </Button>
        </Tooltip>

        <Tooltip label="Alt+Shift+M" openDelay={500}>
          <Button
            size={"sm"}
            onClick={() => {
              editorRef.current?.setValue(JSON.stringify(def));
            }}
          >
            Minify
          </Button>
        </Tooltip>

        <Tooltip label="calculate Diff" openDelay={500}>
          <Checkbox
            size={"sm"}
            onChange={() => {
              console.log("toggling");
              setDiff(!diff);
            }}
          >
            Diff
          </Checkbox>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

/* TODOs:
Save editors in storage on change - p1

*/
