import React from 'react';
import './App.css';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-material/dist/all.css'
import { sampleProducts } from './sample-products';
import Button from '@material-ui/core/Button';
import { DateEditor, TextEditor, NumberEditor } from './editors';


class App extends React.Component {



  constructor(props) {
      super(props);
      this.state = {
          data: sampleProducts.slice(0),
          editID: null
      };
  }

  render() {
      return (
          <Grid
              data={this.state.data.map((item) =>
                  Object.assign({
                      inEdit: item.ProductID === this.state.editID
                  }, item)
              )}
              editField="inEdit"

              onRowClick={this.rowClick}
              onItemChange={this.itemChange}
          >
              <GridToolbar>
                  <div onClick={this.closeEdit}>
                      <Button title="Add new" color="primary" onClick={this.addRecord} >
                          Add new
                      </Button>
                      {this.state.editID && <Button title="Cancel edit" color="secondary" onClick={this.cancel} >
                          Close editors
                      </Button>}
                  </div>
              </GridToolbar >
              <Column field="ProductID" title="Id" width="50px" editable={false} />
              <Column field="ProductName" title="Name" cell={TextEditor} />
              <Column field="FirstOrderedOn" title="First Ordered" cell={DateEditor} />
              <Column field="UnitsInStock" title="Units" width="150px" cell={NumberEditor} />
              <Column field="Discontinued" title="Discontinued" editor="boolean" />
          </Grid >
      );
  }

  rowClick = (e) => {
      this.setState({
          editID: e.dataItem.ProductID
      });
  };

  itemChange = (e) => {
      const data = this.state.data.slice();
      const index = data.findIndex(d => d.ProductID === e.dataItem.ProductID);
      data[index] = { ...data[index], [e.field]: e.value };
      this.setState({
          data: data
      });
  };

  closeEdit = (e) => {
      if (e.target === e.currentTarget) {
          this.setState({ editID: null });
      }

  };

  cancel = (e) => {
    this.setState({ editID: null });
  }

  addRecord = () => {
      const newRecord = { ProductID: this.state.data.length + 1 };
      const data = this.state.data.slice();
      data.unshift(newRecord);
      this.setState({
          data: data,
          editID: newRecord.ProductID
      });
  };
}

export default App;
