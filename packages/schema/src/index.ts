export const BAIGE_SCHEMA_VERSION = "0.1.0" as const;

export type CoordinateSpace =
  | "world"
  | "actor"
  | "root"
  | "bone"
  | "socket"
  | "virtualSocket"
  | "target"
  | "camera"
  | "screen";

export interface Vector3 {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface Quaternion {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly w: number;
}

export interface Transform {
  readonly position: Vector3;
  readonly rotation: Quaternion;
  readonly scale: Vector3;
}

export interface BaigeDocument {
  readonly schema: string;
  readonly schemaVersion: typeof BAIGE_SCHEMA_VERSION;
  readonly id: string;
  readonly extensions?: Readonly<Record<string, unknown>>;
}
