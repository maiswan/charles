export abstract class ControllerBase
{
    public readonly Identifier: string;

    private _isEnabled: boolean;

    get isEnabled(): boolean
    {
        return this._isEnabled;
    }

    public enable(): void
    {
        this._isEnabled = true;
    }

    public disable(): void
    {
        this._isEnabled = false;
    }

    public toggle(): void
    {
        if (this.isEnabled) { this.disable(); } else { this.enable(); }
    }

    receive(parameters: string[]): void {
        switch (parameters[0])
        {
            case "enable":
                this.enable();
                return;
                
            case "disable":
                this.disable();
                return;

            case "toggle":
                this.toggle();
                return;
        }
    }
}