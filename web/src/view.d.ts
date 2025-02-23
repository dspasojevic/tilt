// Autogenerated: DO NOT EDIT
declare namespace Proto {
  export interface webviewView {
    log?: string;
    resources?: webviewResource[];
    /**
     * We used to have a setting that allowed users to dynamically
     * prepend timestamps in logs.
     */
    DEPRECATEDLogTimestamps?: boolean;
    featureFlags?: object;
    needsAnalyticsNudge?: boolean;
    runningTiltBuild?: webviewTiltBuild;
    DEPRECATEDLatestTiltBuild?: webviewTiltBuild;
    suggestedTiltVersion?: string;
    versionSettings?: webviewVersionSettings;
    tiltCloudUsername?: string;
    tiltCloudTeamName?: string;
    tiltCloudSchemeHost?: string;
    tiltCloudTeamID?: string;
    fatalError?: string;
    logList?: webviewLogList;
    /**
     * Allows us to synchronize on a running Tilt intance,
     * so we can tell when Tilt restarted.
     */
    tiltStartTime?: string;
    tiltfileKey?: string;
    /**
     * New API-server based data models.
     */
    uiSession?: v1alpha1UISession;
    uiResources?: v1alpha1UIResource[];
    uiButtons?: v1alpha1UIButton[];
    /**
     * indicates that this view is a complete representation of the app
     * if false, this view just contains deltas from a previous view.
     */
    isComplete?: boolean;
  }
  export interface webviewVersionSettings {
    checkUpdates?: boolean;
  }
  export interface webviewUploadSnapshotResponse {
    url?: string;
  }
  export interface webviewTiltBuild {
    version?: string;
    commitSHA?: string;
    date?: string;
    dev?: boolean;
  }
  export interface webviewTargetSpec {
    id?: string;
    type?: string;
    hasLiveUpdate?: boolean;
  }
  export interface webviewSnapshotHighlight {
    beginningLogID?: string;
    endingLogID?: string;
    text?: string;
  }
  export interface webviewSnapshot {
    view?: webviewView;
    isSidebarClosed?: boolean;
    path?: string;
    snapshotHighlight?: webviewSnapshotHighlight;
    snapshotLink?: string;
  }
  export interface webviewResource {
    name?: string;
    lastDeployTime?: string;
    triggerMode?: number;
    buildHistory?: webviewBuildRecord[];
    currentBuild?: webviewBuildRecord;
    pendingBuildSince?: string;
    hasPendingChanges?: boolean;
    endpointLinks?: webviewLink[];
    podID?: string;
    k8sResourceInfo?: webviewK8sResourceInfo;
    localResourceInfo?: webviewLocalResourceInfo;
    runtimeStatus?: string;
    updateStatus?: string;
    isTiltfile?: boolean;
    specs?: webviewTargetSpec[];
    queued?: boolean;
  }
  export interface webviewLogSpan {
    manifestName?: string;
  }
  export interface webviewLogSegment {
    spanId?: string;
    time?: string;
    text?: string;
    level?: string;
    /**
     * When we store warnings in the LogStore, we break them up into lines and
     * store them as a series of line segments. 'anchor' marks the beginning of a
     * series of logs that should be kept together.
     *
     * Anchor warning1, line1
     *        warning1, line2
     * Anchor warning2, line1
     */
    anchor?: boolean;
    /**
     * Context-specific optional fields for a log segment.
     * Used for experimenting with new types of log metadata.
     */
    fields?: object;
  }
  export interface webviewLogList {
    spans?: object;
    segments?: webviewLogSegment[];
    /**
     * [from_checkpoint, to_checkpoint)
     *
     * An interval of [0, 0) means that the server isn't using
     * the incremental load protocol.
     *
     * An interval of [-1, -1) means that the server doesn't have new logs
     * to send down.
     */
    fromCheckpoint?: number;
    toCheckpoint?: number;
  }
  export interface webviewLocalResourceInfo {
    pid?: string;
    isTest?: boolean;
  }
  export interface webviewLink {
    url?: string;
    name?: string;
  }
  export interface webviewK8sResourceInfo {
    podName?: string;
    podCreationTime?: string;
    podUpdateStartTime?: string;
    podStatus?: string;
    podStatusMessage?: string;
    allContainersReady?: boolean;
    podRestarts?: number;
    spanId?: string;
    displayNames?: string[];
  }
  export interface webviewBuildRecord {
    error?: string;
    warnings?: string[];
    startTime?: string;
    finishTime?: string;
    isCrashRebuild?: boolean;
    /**
     * The span id for this build record's logs in the main logstore.
     */
    spanId?: string;
  }
  export interface webviewAckWebsocketResponse {}
  export interface webviewAckWebsocketRequest {
    toCheckpoint?: number;
    /**
     * Allows us to synchronize on a running Tilt intance,
     * so we can tell when we're talking to the same Tilt.
     */
    tiltStartTime?: string;
  }
  export interface v1Time {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive. This field may be limited in precision depending on context.
     */
    nanos?: number;
  }
  export interface v1OwnerReference {
    /**
     * API version of the referent.
     */
    apiVersion?: string;
    kind?: string;
    name?: string;
    uid?: string;
    controller?: boolean;
    blockOwnerDeletion?: boolean;
  }
  export interface v1ObjectMeta {
    name?: string;
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique
     * name ONLY IF the Name field has not been provided.
     * If this field is used, the name returned to the client will be different
     * than the name passed. This value will also be combined with a unique suffix.
     * The provided value has the same validation rules as the Name field,
     * and may be truncated by the length of the suffix required to make the value
     * unique on the server.
     *
     * If this field is specified and the generated name exists, the server will
     * NOT return a 409 - instead, it will either return 201 Created or 500 with Reason
     * ServerTimeout indicating a unique name could not be found in the time allotted, and the client
     * should retry (optionally after the time indicated in the Retry-After header).
     *
     * Applied only if Name is not specified.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     * +optional
     */
    generateName?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is
     * equivalent to the "default" namespace, but "default" is the canonical representation.
     * Not all objects are required to be scoped to a namespace - the value of this field for
     * those objects will be empty.
     *
     * Must be a DNS_LABEL.
     * Cannot be updated.
     * More info: http://kubernetes.io/docs/user-guide/namespaces
     * +optional
     */
    namespace?: string;
    /**
     * SelfLink is a URL representing this object.
     * Populated by the system.
     * Read-only.
     *
     * DEPRECATED
     * Kubernetes will stop propagating this field in 1.20 release and the field is planned
     * to be removed in 1.21 release.
     * +optional
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by
     * the server on successful creation of a resource and is not allowed to change on PUT
     * operations.
     *
     * Populated by the system.
     * Read-only.
     * More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     * +optional
     */
    uid?: string;
    /**
     * An opaque value that represents the internal version of this object that can
     * be used by clients to determine when objects have changed. May be used for optimistic
     * concurrency, change detection, and the watch operation on a resource or set of resources.
     * Clients must treat these values as opaque and passed unmodified back to the server.
     * They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system.
     * Read-only.
     * Value must be treated as opaque by clients and .
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     * +optional
     */
    resourceVersion?: string;
    generation?: string;
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was
     * created. It is not guaranteed to be set in happens-before order across separate operations.
     * Clients may not set this value. It is represented in RFC3339 form and is in UTC.
     *
     * Populated by the system.
     * Read-only.
     * Null for lists.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     * +optional
     */
    creationTimestamp?: string;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This
     * field is set by the server when a graceful deletion is requested by the user, and is not
     * directly settable by a client. The resource is expected to be deleted (no longer visible
     * from resource lists, and not reachable by name) after the time in this field, once the
     * finalizers list is empty. As long as the finalizers list contains items, deletion is blocked.
     * Once the deletionTimestamp is set, this value may not be unset or be set further into the
     * future, although it may be shortened or the resource may be deleted prior to this time.
     * For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react
     * by sending a graceful termination signal to the containers in the pod. After that 30 seconds,
     * the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup,
     * remove the pod from the API. In the presence of network partitions, this object may still
     * exist after this timestamp, until an administrator or automated process can determine the
     * resource is fully terminated.
     * If not set, graceful deletion of the object has not been requested.
     *
     * Populated by the system when a graceful deletion is requested.
     * Read-only.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     * +optional
     */
    deletionTimestamp?: string;
    deletionGracePeriodSeconds?: string;
    labels?: object;
    annotations?: object;
    ownerReferences?: v1OwnerReference[];
    finalizers?: string[];
    clusterName?: string;
    /**
     * ManagedFields maps workflow-id and version to the set of fields
     * that are managed by that workflow. This is mostly for internal
     * housekeeping, and users typically shouldn't need to set or
     * understand this field. A workflow can be the user's name, a
     * controller's name, or the name of a specific apply path like
     * "ci-cd". The set of fields is always in the version that the
     * workflow used when modifying the object.
     *
     * +optional
     */
    managedFields?: v1ManagedFieldsEntry[];
  }
  export interface v1MicroTime {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive. This field may be limited in precision depending on context.
     */
    nanos?: number;
  }
  export interface v1ManagedFieldsEntry {
    /**
     * Manager is an identifier of the workflow managing these fields.
     */
    manager?: string;
    /**
     * Operation is the type of operation which lead to this ManagedFieldsEntry being created.
     * The only valid values for this field are 'Apply' and 'Update'.
     */
    operation?: string;
    /**
     * APIVersion defines the version of this resource that this field set
     * applies to. The format is "group/version" just like the top-level
     * APIVersion field. It is necessary to track the version of a field
     * set because it cannot be automatically converted.
     */
    apiVersion?: string;
    time?: string;
    fieldsType?: string;
    fieldsV1?: v1FieldsV1;
    /**
     * Subresource is the name of the subresource used to update that object, or
     * empty string if the object was updated through the main resource. The
     * value of this field is used to distinguish between managers, even if they
     * share the same name. For example, a status update will be distinct from a
     * regular update using the same manager name.
     * Note that the APIVersion field is not related to the Subresource field and
     * it always corresponds to the version of the main resource.
     */
    subresource?: string;
  }
  export interface v1FieldsV1 {
    /**
     * Raw is the underlying serialization of this object.
     */
    Raw?: string;
  }
  export interface v1alpha1UITextInputStatus {
    /**
     * The content of the text input.
     */
    value?: string;
  }
  export interface v1alpha1UITextInputSpec {
    /**
     * Initial value for this field.
     *
     * +optional
     */
    defaultValue?: string;
    /**
     * A short hint that describes the expected input of this field.
     *
     * +optional
     */
    placeholder?: string;
  }
  export interface v1alpha1UISessionStatus {
    featureFlags?: v1alpha1UIFeatureFlag[];
    needsAnalyticsNudge?: boolean;
    runningTiltBuild?: corev1alpha1TiltBuild;
    suggestedTiltVersion?: string;
    versionSettings?: corev1alpha1VersionSettings;
    tiltCloudUsername?: string;
    tiltCloudTeamName?: string;
    tiltCloudSchemeHost?: string;
    tiltCloudTeamID?: string;
    fatalError?: string;
    tiltStartTime?: string;
    tiltfileKey?: string;
  }
  export interface v1alpha1UISessionSpec {}
  export interface v1alpha1UISession {
    metadata?: v1ObjectMeta;
    spec?: v1alpha1UISessionSpec;
    status?: v1alpha1UISessionStatus;
  }
  export interface v1alpha1UIResourceTargetSpec {
    id?: string;
    type?: string;
    hasLiveUpdate?: boolean;
  }
  export interface v1alpha1UIResourceStatus {
    lastDeployTime?: string;
    triggerMode?: number;
    buildHistory?: v1alpha1UIBuildTerminated[];
    currentBuild?: v1alpha1UIBuildRunning;
    pendingBuildSince?: string;
    hasPendingChanges?: boolean;
    endpointLinks?: v1alpha1UIResourceLink[];
    k8sResourceInfo?: v1alpha1UIResourceKubernetes;
    localResourceInfo?: v1alpha1UIResourceLocal;
    /**
     * The RuntimeStatus is a simple, high-level summary of the runtime state of a server.
     *
     * Not all resources run servers.
     * +optional
     */
    runtimeStatus?: string;
    /**
     * The UpdateStatus is a simple, high-level summary of any update tasks to bring
     * the resource up-to-date.
     *
     * If the resource runs a server, this may include both build tasks and live-update
     * syncing.
     * +optional
     */
    updateStatus?: string;
    specs?: v1alpha1UIResourceTargetSpec[];
    queued?: boolean;
    /**
     * Order expresses the relative order of resources in the UI when they're not
     * otherwise sorted. Lower integers go first. When two resources have the same
     * order, they should be sorted by name.
     *
     * When UIResources are generated from the Tiltfile, we use the order they
     * were added to the Tiltfile for the Order field.
     *
     * +optional
     */
    order?: number;
    /**
     * Information about the resource's objects' disabled status.
     */
    disableStatus?: v1alpha1DisableResourceStatus;
    /**
     * Waiting provides detail on why the resource is currently blocked from updating.
     *
     * +optional
     */
    waiting?: v1alpha1UIResourceStateWaiting;
    /**
     * Represents the latest available observations of a UIResource's current state.
     *
     * Designed for compatibility with 'wait' and cross-resource status reporting.
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#typical-status-properties
     *
     * +optional
     */
    conditions?: v1alpha1UIResourceCondition[];
  }
  export interface v1alpha1UIResourceStateWaitingOnRef {
    /**
     * Group for the object type being waited on.
     */
    group?: string;
    /**
     * APIVersion for the object type being waited on.
     */
    apiVersion?: string;
    /**
     * Kind of the object type being waited on.
     */
    kind?: string;
    /**
     * Name of the object being waiting on.
     */
    name?: string;
  }
  export interface v1alpha1UIResourceStateWaiting {
    /**
     * Reason is a unique, one-word reason for why the UIResource update is pending.
     */
    reason?: string;
    /**
     * HoldingOn is the set of objects blocking this resource from updating.
     *
     * These objects might NOT be explicit dependencies of the current resource. For example, if an un-parallelizable
     * resource is updating, all other resources with queued updates will be holding on it with a reason of
     * `waiting-for-local`.
     *
     * +optional
     */
    on?: v1alpha1UIResourceStateWaitingOnRef[];
  }
  export interface v1alpha1UIResourceSpec {}
  export interface v1alpha1UIResourceLocal {
    pid?: string;
    /**
     * Whether this represents a test job.
     *
     * Deprecated: Users should use labels for marking services as tests.
     *
     * +optional
     */
    isTest?: boolean;
  }
  export interface v1alpha1UIResourceLink {
    url?: string;
    name?: string;
  }
  export interface v1alpha1UIResourceKubernetes {
    /**
     * The name of the active pod.
     *
     * The active pod tends to be what Tilt defaults to for port-forwards,
     * live-updates, etc.
     * +optional
     */
    podName?: string;
    podCreationTime?: string;
    podUpdateStartTime?: string;
    podStatus?: string;
    podStatusMessage?: string;
    allContainersReady?: boolean;
    podRestarts?: number;
    spanID?: string;
    displayNames?: string[];
  }
  export interface v1alpha1UIResourceCondition {
    /**
     * Type of UI Resource condition.
     */
    type?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string;
    lastTransitionTime?: string;
    reason?: string;
    message?: string;
  }
  export interface v1alpha1UIResource {
    metadata?: v1ObjectMeta;
    spec?: v1alpha1UIResourceSpec;
    status?: v1alpha1UIResourceStatus;
  }
  export interface v1alpha1UIInputStatus {
    /**
     * Name of the input whose status this is. Must match the `Name` of a corresponding
     * UIInputSpec.
     */
    name?: string;
    text?: v1alpha1UITextInputStatus;
    bool?: v1alpha1UIBoolInputStatus;
    hidden?: v1alpha1UIHiddenInputStatus;
  }
  export interface v1alpha1UIInputSpec {
    /**
     * Name of this input. Must be unique within the UIButton.
     */
    name?: string;
    label?: string;
    text?: v1alpha1UITextInputSpec;
    bool?: v1alpha1UIBoolInputSpec;
    hidden?: v1alpha1UIHiddenInputSpec;
  }
  export interface v1alpha1UIHiddenInputStatus {
    value?: string;
  }
  export interface v1alpha1UIHiddenInputSpec {
    value?: string;
  }
  export interface v1alpha1UIFeatureFlag {
    name?: string;
    value?: boolean;
  }
  export interface v1alpha1UIComponentLocation {
    /**
     * ComponentID is the identifier of the parent component to associate this component with.
     *
     * For example, this is a resource name if the ComponentType is Resource.
     */
    componentID?: string;
    /**
     * ComponentType is the type of the parent component.
     */
    componentType?: string;
  }
  export interface v1alpha1UIButtonStatus {
    /**
     * LastClickedAt is the timestamp of the last time the button was clicked.
     *
     * If the button has never clicked before, this will be the zero-value/null.
     */
    lastClickedAt?: string;
    inputs?: v1alpha1UIInputStatus[];
  }
  export interface v1alpha1UIButtonSpec {
    /**
     * Location associates the button with another component for layout.
     */
    location?: v1alpha1UIComponentLocation;
    /**
     * Text to appear on the button itself or as hover text (depending on button location).
     */
    text?: string;
    /**
     * IconName is a Material Icon to appear next to button text or on the button itself (depending on button location).
     *
     * Valid values are icon font ligature names from the Material Icons set.
     * See https://fonts.google.com/icons for the full list of available icons.
     *
     * If both IconSVG and IconName are specified, IconSVG will take precedence.
     *
     * +optional
     */
    iconName?: string;
    /**
     * IconSVG is an SVG to use as the icon to appear next to button text or on the button itself (depending on button
     * location).
     *
     * This should be an <svg> element scaled for a 24x24 viewport.
     *
     * If both IconSVG and IconName are specified, IconSVG will take precedence.
     *
     * +optional
     */
    iconSVG?: string;
    /**
     * If true, the button will be rendered, but with an effect indicating it's
     * disabled. It will also be unclickable.
     *
     * +optional
     */
    disabled?: boolean;
    /**
     * +optional
     */
    requiresConfirmation?: boolean;
    inputs?: v1alpha1UIInputSpec[];
  }
  export interface v1alpha1UIButton {
    metadata?: v1ObjectMeta;
    spec?: v1alpha1UIButtonSpec;
    status?: v1alpha1UIButtonStatus;
  }
  export interface v1alpha1UIBuildTerminated {
    error?: string;
    warnings?: string[];
    startTime?: string;
    finishTime?: string;
    spanID?: string;
    isCrashRebuild?: boolean;
  }
  export interface v1alpha1UIBuildRunning {
    startTime?: string;
    spanID?: string;
  }
  export interface v1alpha1UIBoolInputStatus {
    value?: boolean;
  }
  export interface v1alpha1UIBoolInputSpec {
    defaultValue?: boolean;
    trueString?: string;
    falseString?: string;
  }
  export interface v1alpha1DisableSource {
    configMap?: v1alpha1ConfigMapDisableSource;
  }
  export interface v1alpha1DisableResourceStatus {
    /**
     * How many of the resource's sources are enabled.
     */
    enabledCount?: number;
    /**
     * How many of the resource's sources are disabled.
     */
    disabledCount?: number;
    state?: string;
    /**
     * All unique sources that control the resource's objects' disable status.
     */
    sources?: v1alpha1DisableSource[];
  }
  export interface v1alpha1ConfigMapDisableSource {
    name?: string;
    /**
     * The key where the enable/disable state is stored.
     */
    key?: string;
  }
  export interface runtimeError {
    error?: string;
    code?: number;
    message?: string;
    details?: protobufAny[];
  }
  export interface protobufAny {
    typeUrl?: string;
    value?: string;
  }
  export interface corev1alpha1VersionSettings {
    checkUpdates?: boolean;
  }
  export interface corev1alpha1TiltBuild {
    version?: string;
    commitSHA?: string;
    date?: string;
    dev?: boolean;
  }
}
