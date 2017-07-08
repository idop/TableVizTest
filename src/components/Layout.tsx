/**
 * Created by ido on 07/07/2017.
 */
import * as React from "react";


import {Header} from "./Header";
import {Dashboard} from "./Dashboard"
export interface LayoutProps { }

export class Layout extends React.Component<LayoutProps, undefined> {
    render() {
        return <div>
            <Header title={'Test Dashboard'} />
            <Dashboard/>
        </div>;
    }
}