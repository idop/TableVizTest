import * as React from "react";
import {ChartHeader} from "./Charts/ChartHeader";
import {ChartTable} from "./Charts/Table/ChartTable"
import {Domain, TableChartData, TableColumn, TableColumnType} from "../utils/Utils";
export interface DashboardProps {
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Dashboard extends React.Component<DashboardProps, undefined> {
    render() {
        const data: string[][] = [['Aternity', '44,589','100','50,000'], ['Microsoft Outlook', '23,675','75','43,454'], ['Sap', '1,234','50','5,436']];
        const totalActivityColumn = new TableColumn('Total Activities', TableColumnType.BAR);
        totalActivityColumn.domain =new Domain(5436-100,50000+100) ;
        const columns: TableColumn[] = [new TableColumn('Application', TableColumnType.TEXT),
            new TableColumn('Number Of Users', TableColumnType.TEXT),
            new TableColumn('Score', TableColumnType.CIRCLE),
            totalActivityColumn];
        return <div>
            <div className="dashboard-main-container">
                <div className="dashboard">
                    <ChartHeader title={"Applications"}/>
                    <ChartTable data={new TableChartData(columns, data)}/>
                </div>
            </div>
        </div>;
    }
}