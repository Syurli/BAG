export const BRIDGE_PROTOCOL_VERSION = "0.1.0" as const;

export type EngineKind = "unreal" | "godot" | "unity" | "custom";

export interface BridgeCapabilities {
  readonly poseStreaming: boolean;
  readonly runtimeHotReload: boolean;
  readonly damageShapes: readonly ("box" | "sphere" | "capsule" | "ray")[];
  readonly features: Readonly<Record<string, boolean>>;
}

export interface BridgeHandshake {
  readonly protocolVersion: typeof BRIDGE_PROTOCOL_VERSION;
  readonly engine: EngineKind;
  readonly engineVersion: string;
  readonly bridgeVersion: string;
  readonly projectId: string;
  readonly capabilities: BridgeCapabilities;
}

export interface BridgeError {
  readonly code: string;
  readonly message: string;
  readonly recoverable: boolean;
  readonly details?: Readonly<Record<string, unknown>>;
}
