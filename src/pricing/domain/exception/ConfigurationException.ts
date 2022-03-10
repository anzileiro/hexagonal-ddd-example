export class ConfigurationException extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'ConfigurationException';
  }

  public static InvalidKey(key: string): ConfigurationException {
    return new ConfigurationException(`The key: ${key} is null or undefined.`);
  }

  public static InvalidValue(key: string): ConfigurationException {
    return new ConfigurationException(`The key: ${key} is null or undefined.`);
  }
}
