import { Mars, handleEdges } from "./mars";
import { Command, Rover, getRoverbyCommands } from "./rover";

export const execute = (
    mars: Mars,
    initRover: Rover,
    commands: Command[],
): Rover => {
    const newRover = getRoverbyCommands(initRover, commands);

    return handleEdges(newRover, mars);
};
