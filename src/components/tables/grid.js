
import React from "react";
import BootstrapTableGrid from './bootstrap_grid';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import { columns, init_products, products } from "./data.json";


export default function GridComponent() {
  return (
    <ThemeProvider theme={createTheme({

    })}>
      <BootstrapTableGrid
        init_products={init_products}
        products={products}
        columns={columns}
      />
    </ThemeProvider>
  );
}

