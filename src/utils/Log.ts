import LogTags from "./LogTags";

/**
 * FILTER: filter out logging related to selected tags
 * MATCH: see only logs related to selected tags
 * NONE: do nothing, see all logs.
 */
enum Mode {
  FILTER = "FILTER",
  MATCH = "MATCH",
  NONE = "NONE",
}

const filterTags:[] = [];
let mode = Mode.FILTER;
/**
 * console.log wrapper class used alongside LogTypes to simplify this project logging
 * add LogTypes values to filterTags array
 * modify mode to set filtering type to avoid || only log log specific messages
 *
 * example: [LogTags.HTTP_CLIENT, LogTags.CONNECTIVITY_STATUS_MANAGER, LogTags.DEVELOPER_PROPERTIES_SERVICE]
 *
 * TODO: add a script or a .config file to avoid having to modify this class directly
 *
 */
class Log {
  static logIfNotFiltered(prefix: string, tag: LogTags, message: string) {
    switch (mode) {
      case Mode.FILTER: {
        if (filterTags.findIndex((t) => t === tag) < 0) {
          console.log(`[${prefix}] [${tag}]: ${message}`);
        }
        break;
      }
      case Mode.MATCH: {
        if (filterTags.findIndex((t) => t === tag) >= 0) {
          console.log(`[${prefix}] [${tag}]: ${message}`);
        }
        break;
      }
      case Mode.NONE: {
        console.log(`[${prefix}] [${tag}]: ${message}`);
      }
    }
  }

  static info(tag: LogTags, message: string) {
    this.logIfNotFiltered("INFO", tag, message);
  }

  static warn(tag: LogTags, message: string) {
    this.logIfNotFiltered("WARN", tag, message);
  }

  static error(tag: LogTags, message: string, error?: any) {
    this.logIfNotFiltered(
      "ERROR",
      tag,
      `${message}\n Error StackTrace:\n ${JSON.stringify(error)}`
    );
  }

  static crash(tag: LogTags, message: string, error: any) {
    this.logIfNotFiltered("CRASH", tag, message);
  }
}
export default Log;
