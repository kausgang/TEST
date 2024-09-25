"use client";

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

function Example() {
  const [parent, setParent] = useState(null);
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

  return (
    <div className="border-pink-600 border-2 h-96 w-48">
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default Example;
