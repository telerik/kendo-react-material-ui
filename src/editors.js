import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { formatDate } from '@telerik/kendo-intl';


export class DateEditor extends React.Component {
    handleChange(e) {
        this.props.onChange({
            dataItem: this.props.dataItem,
            field: this.props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value
        });
    }
    render() {
        let value = this.props.dataItem[this.props.field];
        if (!this.props.dataItem.inEdit) {
            return (
                <td> {
                    (value === null) ? '' : formatDate(value, "d/M/yyyy")}
                </td>
            );
        }
        return (
            <td>
                <TextField
                    style={{width: "100%"}}
                    id="FirstOrderedOn"
                    label="Order Date"
                    type="date"
                    value={value || ""}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChange.bind(this)}
                />
            </td>
        );
    }
}

export class TextEditor extends React.Component {
    handleChange(e) {
        this.props.onChange({
            dataItem: this.props.dataItem,
            field: this.props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value
        });
    }
    render() {
        const value = this.props.dataItem[this.props.field];
        if (!this.props.dataItem.inEdit) {
            return (
                <td> {
                    (value === null) ? '' : value}
                </td>
            );
        }
        return (
            <td>
                <TextField
                    style={{width: "100%"}}
                    id="ProductName"
                    label="Product Name"
                    type="text"
                    value={value || ""}
                    onChange={this.handleChange.bind(this)}
                />
            </td>
        );
    }
}

export class NumberEditor extends React.Component {
    handleChange(e) {
        this.props.onChange({
            dataItem: this.props.dataItem,
            field: this.props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value
        });
    }
    render() {
        const value = this.props.dataItem[this.props.field];
        if (!this.props.dataItem.inEdit) {
            return (
                <td> {
                    (value === null) ? '' : value}
                </td>
            );
        }
        return (
            <td>
                <TextField
                    style={{width: "100%"}}
                    id="Units"
                    label="Units"
                    type="number"
                    value={value || 0}
                    onChange={this.handleChange.bind(this)}
                />
            </td>
        );
    }
}

export class BoolEditor extends React.Component {
    handleChange(e) {
        this.props.onChange({
            dataItem: this.props.dataItem,
            field: this.props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value
        });
    }
    render() {
        const value = this.props.dataItem[this.props.field];
        if (!this.props.dataItem.inEdit) {
            return (
                <td> {
                    (value === null) ? '' : value}
                </td>
            );
        }
        return (
            <td>
                <Checkbox
                    id="Discontinued"
                    value={value}
                    color="primary"
                    onChange={this.handleChange.bind(this)}
                />
            </td>
        );
    }
}

