/**
 * Created by ido on 08/07/2017.
 */

import * as React from "react";

export interface ChartTableRowProps {data:string[]}

export class ChartTableRow extends React.Component<ChartTableRowProps, undefined> {
    render() {
        const row =this.props.data.map(val=><td>{val}</td>);
        return <tr className="chart-table-row">{row}</tr>;
    }
}