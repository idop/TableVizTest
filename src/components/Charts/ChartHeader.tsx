/**
 * Created by ido on 07/07/2017.
 */
import * as React from "react";

export interface ChartHeaderProps { title: string}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ChartHeader extends React.Component<ChartHeaderProps, undefined> {
    render() {
        return  <div>
            <div className="chart-header">
                <span className="title">{this.props.title}</span>
            </div>
        </div>;
    }
}