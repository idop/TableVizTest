/**
 * Created by ido on 08/07/2017.
 */

import * as React from "react";
import {TableColumn} from "../../../utils/Utils";

export interface ChartTableHeaderProps {headers:TableColumn[]}

export class ChartTableHeader extends React.Component<ChartTableHeaderProps, undefined> {

    render() {
        const header = this.props.headers.map(val=><th key ={val.name}>{val.name}</th>);
        return <thead><tr className="chart-table-header">
            {header}
        </tr></thead>;
    }
}