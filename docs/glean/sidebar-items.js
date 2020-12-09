initSidebarItems({"enum":[["ErrorType","The possible error types for metric recording. Note: the cases in this enum must be kept in sync with the ones in the platform-specific code (e.g. `ErrorType.kt`) and with the metrics in the registry files."],["Lifetime","The supported metrics' lifetimes."],["TimeUnit","Different resolutions supported by the time related metric types (e.g. DatetimeMetric)."]],"fn":[["global_glean","Gets a reference to the global Glean object."],["initialize","Creates and initializes a new Glean object."],["register_ping_type","Register a new `PingType`."],["set_debug_view_tag","Sets a debug view tag."],["set_experiment_active","Indicate that an experiment is running.  Glean will then add an experiment annotation to the environment which is sent with pings. This infomration is not persisted between runs."],["set_experiment_inactive","Indicate that an experiment is no longer running."],["set_log_pings","Sets the log pings debug option."],["set_source_tags","Sets source tags."],["set_upload_enabled","Sets whether upload is enabled or not."],["setup_glean","Sets or replaces the global Glean object."],["shutdown","Shuts down Glean."],["submit_ping_by_name","Collects and submits a ping for eventual uploading by name."],["test_reset_glean","TEST ONLY FUNCTION. Resets the Glean state and triggers init again."]],"mod":[["net","Handling the Glean upload logic."],["private","The different metric types supported by the Glean SDK to handle data."]],"struct":[["ClientInfoMetrics","Metrics included in every ping as `client_info`."],["CommonMetricData","The common set of data shared across all different metric types."],["Configuration","The Glean configuration."],["Error","A specialized `Error` type for this crate's operations."],["Glean","The object holding meta information about a Glean instance."],["RecordedEvent","Represents the recorded data for a single event."]],"type":[["Result","A specialized `Result` type for this crate's operations."]]});