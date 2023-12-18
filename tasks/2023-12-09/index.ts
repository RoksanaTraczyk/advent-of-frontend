export interface Tool {
    init: () => {},
    update: () => {},
    dispose: ()=> {},
}

export class Equipment {
    tools: Tool[] = [];
    initializedTools: Tool[] = [];

    registerTools(tool: Tool) {
        this.tools.push(tool);
    };

    initializeTools() {
        this.tools.forEach(tool => {
            tool.init();
            this.initializedTools.push(tool);
        });
    };

    updateTools() {
        this.tools.forEach(tool => {
            if (this.isToolInitialized(tool)) {
                throw new Error('Cannot update any tools before initialization.')
            }
            tool.update();
        }
        );
    };

    disposeTools() {
        this.tools.forEach(tool => tool.dispose());
    };

    private isToolInitialized(tool: Tool): boolean {
        return this.initializedTools.find(item => item === tool) === undefined
    }
}