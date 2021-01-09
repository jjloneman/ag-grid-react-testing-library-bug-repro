import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import {
  AllCommunityModules,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

export type AppProps = {
  onClick?: () => void;
};

const Button: React.FC<ICellRendererParams & AppProps> = (params) => {
  return (
    <button
      onClick={() => {
        console.log("You clicked me!");
        params.onClick?.();
      }}
    >
      Click Me
    </button>
  );
};

const App: React.FC<AppProps> = (props) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "100px", width: "100px" }}
    >
      <AgGridReact
        columnDefs={[
          {
            headerName: "Button",
            cellRendererFramework: Button,
            cellRendererParams: {
              onClick: props?.onClick,
            },
          },
        ]}
        rowData={[{}]}
        modules={AllCommunityModules}
      />
    </div>
  );
};

export default App;
