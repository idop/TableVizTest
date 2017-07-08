/**
 * Created by ido on 08/07/2017.
 */
export class Domain {
    constructor(public min: number, public max: number) {
    }
}


export function getScale(value: number, currentDomain: Domain, targetDomain: Domain): number {
    let currentDomainRange = currentDomain.max - currentDomain.min;
    let targetDomainRange = targetDomain.max - targetDomain.min;
    return (((value-currentDomain.min) * targetDomainRange) / currentDomainRange) + targetDomain.min;
}


export class TableColumn {
    constructor(public name: string, public type: string) {
    }

    public domain: Domain = null;
}

export class TableChartData {
    constructor(public columns: TableColumn[], public data: string[][]) {
    }
}

export class TableColumnType {
    public static TEXT: string = "TEXT";
    public static CIRCLE: string = "CIRCLE";
    public static BAR: string = "BAR";
}

export function getStatus(scoreStr: string): string {
    let score = parseInt(scoreStr);
    if (!score) {
        return 'Undefined'
    }
    if (score >= 85) {
        return 'Good'
    }
    if (score >= 70) {
        return 'Fair'
    }
    if (score >= 50) {
        return 'Poor'
    }
    return 'Unacceptable'
}
