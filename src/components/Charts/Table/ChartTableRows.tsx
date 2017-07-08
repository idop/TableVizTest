/**
 * Created by ido on 08/07/2017.
 */

import * as React from "react";
import {Domain, getScale, getStatus, TableChartData, TableColumn, TableColumnType,} from "../../../utils/Utils";
import NativeMouseEvent = require("react");
import * as ReactDOM from "react-dom";

export interface ChartTableRowsProps {data: TableChartData}


export class ChartTableRows extends React.Component<ChartTableRowsProps, undefined> {

    private onCellClick(e:any, index: number): void {
        const event:React.MouseEvent<any> = e.nativeEvent;
        console.log(event.pageX);
        console.log(this.props.data.data[index]);
    }

    public render() {
        const columns: TableColumn[] = this.props.data.columns;
        const data: string[][] = this.props.data.data;
        let rows: JSX.Element[] = [];
        let row: JSX.Element[] = [];
        for (let i = 0; i < data.length; ++i) {
            for (let j = 0; j < data[i].length; ++j) {
                let key = i + "," + j;
                switch (columns[j].type) {
                    case TableColumnType.TEXT:
                        row.push(<td key={key} onClick={(e) => this.onCellClick(e, i)}>{data[i][j]}</td>);
                        break;
                    case TableColumnType.BAR:
                        let width = getScale(parseInt(data[i][j].replace(/,/g, '')), columns[j].domain, new Domain(10, 100));
                        const style = {fill: 'blue'};
                        row.push(<td key={key} onClick={(e) => this.onCellClick(e, i)}>
                            <svg className="chart-svg-bar">
                                <rect x="0" y="5" width={width} height="20" style={style}></rect>
                                <text x={width + 5} y="20">{data[i][j]}</text>
                            </svg>
                        </td>);
                        break;
                    case TableColumnType.CIRCLE:
                        row.push(<td key={key} onClick={(e) => this.onCellClick(e, i)}>
                            <svg className="chart-svg">
                                <circle className={getStatus(data[i][j])} cx="50" cy="15" r="10"></circle>
                                <text x="65" y="20">{data[i][j]}</text>
                            </svg>
                        </td>);
                        break;
                    default:
                        throw Error('Unknown table column type of ' + columns[i].type)
                }
            }
            rows.push(<tr key={i} className="chart-table-row">{row}</tr>);
            row = [];
        }

        //const rows2: JSX.Element[] = this.props.data.data.map((value, index, array) => <ChartTableRow data={value}/>);
        return <tbody>{rows}</tbody>;
    }
}

