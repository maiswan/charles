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
        this._isEnabled = !this._isEnabled;
    }
}