export function propertyListener(name: string, val: string)
{
    if (name !== "parameter") { return; }
    const values: string[] = val.split(" ");

    const module: string = values[0];
    const args: string[] = values.slice(1);

    controllers.get(module)?.receive(args);
}