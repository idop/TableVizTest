/**
 * Created by ido on 07/07/2017.
 */
import * as React from "react";

export interface HeaderProps { title: string}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return  <div>
                    <div className="dashboard-header">
                        <div className="fa fa-dashboard"></div>
                        <span className="title">{this.props.title}</span>
                    </div>
                </div>;
    }
}