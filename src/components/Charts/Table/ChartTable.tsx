
import * as React from "react";
import {ChartTableHeader} from "./ChartTableHeader"
import {ChartTableRows} from "./ChartTableRows"
import {TableChartData} from "../../../utils/Utils";
export interface ChartTableProps { data: TableChartData}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ChartTable extends React.Component<ChartTableProps, undefined> {
    render() {
        return  <table className="chart">
            <ChartTableHeader headers={this.props.data.columns}/>
            <ChartTableRows data={this.props.data}/>
        </table>;
    }
}