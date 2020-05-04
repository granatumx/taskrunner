export default {
  clearRunningTasks: !!process.env.CLEAR_RUNNING_TASKS,
  uploadPathOnHost: process.env.GX_UPLOAD_PATH != null ? process.env.GX_UPLOAD_PATH : '/var/granatum/uploaded_files',
  dataPathOnHost: process.env.GX_DATA_PATH != null ? process.env.GX_DATA_PATH : '/var/granatum/data',
  stepPathBaseOnHost: process.env.GX_STEP_PATH != null ? process.env.GX_STEP_PATH : '/var/granatum/steps',
  argsFileOnSWD: 'args.json',
  exportsDirOnSWD: 'exports',
  importsDirOnSWD: 'imports',
  debugDirOnSWD: 'debug',
  uploadedFilesDirOnSWD: 'uploaded_files',
  resultsFileOnSWD: 'results.json',
  exportsAnnoFileOnSWD: 'exports_anno.json',
  // TODO: `errors.json` for reporting errors, and `progress.json` for reporting progress
  swdOnDocker: '/data',
  __DEV__: process.env.NODE_ENV !== 'production',
  GBOX_TIME_LIMIT: process.env.GBOX_TIME_LIMIT != null ? +process.env.GBOX_TIME_LIMIT : 14 * 24 * 60 * 60 * 1000,
};
