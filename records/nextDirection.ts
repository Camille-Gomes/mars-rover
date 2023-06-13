import { Direction } from "../enums/direction";

type NextDirection = Record<Direction, Direction>;

export const RotationLeft: NextDirection = {
    N: Direction.West,
    W: Direction.South,
    S: Direction.East,
    E: Direction.North,
};

export const RotationRight: NextDirection = {
    N: Direction.East,
    E: Direction.South,
    S: Direction.West,
    W: Direction.North,
};
