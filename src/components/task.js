import React from 'react'
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import BootstrapTableGrid from "./tables/bootstrap_grid";
import { products, init_products, columns } from "./tables/data.json";


function DataloadGrid() {

  return (
    <div className="App">
      <ThemeProvider theme={createTheme({

      })}>
        <BootstrapTableGrid
          init_products={init_products}
          products={products}
          columns={columns}
        />
      </ThemeProvider>
    </div>
  );
}


export default DataloadGrid;
