export class OrderController {
    state!: string;

    machines: Machine[] = [];

    registerMachine(machine: Machine): void {
        this.machines.push(machine)
    }

    setState(state: string): void {
        if(state === "unknown") {
            throw Error('Invalid state provided')
        }
        this.state = state;
        this.machines.forEach(machine => {
            machine.setState(state);
        })
    }

    unregisterMachine(machine: Machine): void {
        this.machines.splice(this.machines.indexOf(machine), 1);
    }
}

export class Machine {
    state: string | null = null;
    historcalStates: string[] = [];

    setState(state: string): void {
        this.state = state;
        this.historcalStates.push(this.prepareHistoricStateInfo(state))
    }

    performAudit() : string[] {
        return this.historcalStates;
    }

    private prepareHistoricStateInfo(state: string): string {
        let order = this.historcalStates.length + 1;
        return 'Order #' + order + " - " + state;
    }

}