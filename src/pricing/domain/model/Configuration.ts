import { ConfigurationException } from '../exception/ConfigurationException';

export class Configuration {
  private key: string;
  private value: string;

  public constructor(key: string, value: string) {
    if (!key) {
      throw ConfigurationException.InvalidKey(key);
    }

    if (!value) {
      throw ConfigurationException.InvalidValue(value);
    }

    this.key = key;
    this.value = value;
  }

  public getKey(): string {
    return this.key;
  }

  public getValue(): string {
    return this.value;
  }
}
