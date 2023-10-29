import { useState } from "react";
import { config } from "./utils/config";
import { activateCells } from "./utils/helper";
import Cell from "./Cell";

const Grid = () => {
  const [order, setOrder] = useState([]),
    [isDeactivating, setIsDeactivating] = useState();

  return (
    <div className="grid">
      {config.map((value, index) =>
        value ? (
          <Cell
            key={index}
            filled={order.includes(index) ? true : false}
            onClick={() =>
              activateCells(config, index, order, setOrder, setIsDeactivating)
            }
            disabled={isDeactivating}
          />
        ) : (
          <span />
        )
      )}
    </div>
  );
};

export default Grid;
