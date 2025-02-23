export enum SocketState {
  Loading,
  Reconnecting,
  Closed,
  Active,
}

export enum ResourceView {
  Log,
  Alerts,
  Facets,
  Trace,
  Metrics,

  // The detail view in the Grid-based UI.
  OverviewDetail,

  // The grid UI
  Grid,
}

export enum TriggerMode {
  TriggerModeAuto,
  TriggerModeManualWithAutoInit,
  TriggerModeManual,
  TriggerModeAutoWithManualInit,
}

// what is the status of the resource in the cluster
// Copied from pkg/model
export enum RuntimeStatus {
  Ok = "ok",
  Pending = "pending",
  Error = "error",
  NotApplicable = "not_applicable",
  None = "none",
}

// what is the status of the update
// Copied from pkg/model
export enum UpdateStatus {
  Ok = "ok",
  Pending = "pending",
  InProgress = "in_progress",
  Error = "error",
  NotApplicable = "not_applicable",
  None = "none",
}

// What is the status of the resource with respect to Tilt
export enum ResourceStatus {
  Building, // Tilt is actively doing something (e.g., docker build or kubectl apply)
  Pending, // not building, healthy, or unhealthy, but presumably on its way to one of those (e.g., queued to build, or ContainerCreating)
  Healthy, // e.g., build succeeded and pod is running and healthy
  Unhealthy, // e.g., last build failed, or CrashLoopBackOff
  Warning, // e.g., an undismissed restart
  Disabled, // e.g., a resource is disabled by the user through the API / UI
  None, // e.g., a manual build that has never executed
}

// These constants are duplicated from the Go constants.
export enum TargetType {
  Unspecified = "unspecified",
  Image = "image",
  K8s = "k8s",
  DockerCompose = "docker-compose",
  Local = "local",
}

export type SnapshotHighlight = {
  beginningLogID: string
  endingLogID: string
  text: string
}

export enum ShowFatalErrorModal {
  Default,
  Show,
  Hide,
}

export enum ShowErrorModal {
  Default,
  Show,
}

export type Snapshot = {
  view: Proto.webviewView
  path?: string
  snapshotHighlight?: SnapshotHighlight | null
}

export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

// A plaintext representation of a line of the log,
// with metadata to render it in isolation.
//
// The metadata should be stored as primitive fields
// so that React's default caching behavior will kick in.
export type LogLine = {
  // We assume that 'text' does not contain a newline
  text: string
  manifestName: string
  level: string
  buildEvent?: string
  spanId: string

  // The index of this line in the LogStore StoredLine list.
  storedLineIndex: number
}

// Instructions on how to patch an existing log stream with new logs.
// Includes:
// - The lines to add. Some of these might patch existing lines.
// - A client-side checkpoint, for determining the next patch
//   Users of this API should not modify this. They should just pass it to
//   the next invocation of the log getter. 0 indicates we will get all logs.
export type LogPatchSet = {
  lines: LogLine[]
  checkpoint: number
}

// Display data about the current log trace.
export type LogTrace = {
  url: string
  index: number
}

// Display data that lets us navigate between log traces.
export type LogTraceNav = {
  count: number // The total number of traces
  current: LogTrace
  prev?: LogTrace
  next?: LogTrace
}

export enum ResourceName {
  tiltfile = "(Tiltfile)",
  all = "(all)",
}

// TODO (lizz): Centralize other redundant type definitions
export type UISession = Proto.v1alpha1UISession
export type UIResource = Proto.v1alpha1UIResource
export type UIResourceStatus = Proto.v1alpha1UIResourceStatus
export type UIBuild = Proto.v1alpha1UIBuildTerminated
export type UILink = Proto.v1alpha1UIResourceLink
export type UIButton = Proto.v1alpha1UIButton
export type UIInputSpec = Proto.v1alpha1UIInputSpec
export type UIInputStatus = Proto.v1alpha1UIInputStatus
